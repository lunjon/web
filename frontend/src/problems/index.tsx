import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import {Context, ProblemResponse} from "./model";
import { NotFound } from "../common";
import Library from "./library";
export { ProblemList } from "./list";

async function fetchProblem(index: number | string) {
  // TODO: handle error
  const res = await fetch(`/api/problems/${index}`);
  const status: ProblemResponse = await res.json();
  return status;
}

interface Props {
  context: Context;
}

// The actual component containing displaying a problem.
// TODO:
//  - check context for status
//  - set badge in heading if passed: https://react-bootstrap.github.io/components/badge/
const Page = (props: Props) => {
  const problem = Library.getByIndex(props.context.info.index);
  if (!problem) {
    return <NotFound />;
  }

  const badge = props.context.status.passed
    ? <Badge bg="success">Passed</Badge>
    : <></>;

  const header = <h1>Problem {problem.index} - {problem.title} {badge}</h1>;

  return (<Container>
    {header}
    {problem.description}
  </Container>);
};

/**
* Component for displaying a problem by its index, e.g problem 9.
*/
export const Problem = () => {
  // TODO:
  //  - set spinner in initial state: https://react-bootstrap.github.io/components/spinners/
  const [content, setContent] = useState(<></>);
  const { id } = useParams();

  useEffect(() => {
    const get = async () => {

      if (id) {
        const problem = await fetchProblem(id);
        const ctx = {info: problem, status: problem.status};
        const elem = <Page context={ctx} />
        setContent(elem);
      } else {
        setContent(<NotFound />);
      }
    };

    get();
  }, [id]);

  return content;
};

export const ProblemStats = () => (<h1>Stats</h1>);
