import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import {StatusResponse} from "./model";
import { NotFound } from "../errors";
import Library from "./library";
export { ProblemList } from "./list";

async function fetchStatus(index: number | string) {
  // TODO: handle error
  const res = await fetch(`/api/problems/${index}/status`);
  const body: StatusResponse = await res.json();
  return body;
}

interface Props {
  res: StatusResponse
}

// The actual component containing displaying a problem.
// TODO:
//  - check context for status
//  - set badge in heading if passed: https://react-bootstrap.github.io/components/badge/
const Page = (props: Props) => {
  const problem = Library.getByIndex(props.res.index);
  if (!problem) {
    return <NotFound />;
  }

  const badge = props.res.status.passed
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
        const res = await fetchStatus(id);
        const elem = <Page res={res} />
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
