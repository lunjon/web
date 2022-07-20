import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Model from "./model";
import { NotFound } from "../common";
import Library from "./library";
export { ProblemList } from "./list";

async function fetchProblemStatus(index: number | string) {
  // TODO: handle error
  const res = await fetch(`/api/problems/${index}`);
  const model: Model = await res.json();
  return model;
}

interface Props {
  index: number;
}

const Page = (props: Props) => {
  const info = Library.get(props.index);
  if (!info) {
    return <NotFound />;
  }

  return (<Container>
    <h1>Problem {info.index}</h1>
    {info.description}
  </Container>);
};

/**
* Component for displaying a problem by its index, e.g problem 9.
*/
export const Problem = () => {
  // TODO:
  //  - set spinner in initial state: https://react-bootstrap.github.io/components/spinners/
  //  - set badge in heading if passed: https://react-bootstrap.github.io/components/badge/

  const [content, setContent] = useState(<></>);
  const { id } = useParams();

  useEffect(() => {
    const get = async () => {

      if (id) {
        const status = await fetchProblemStatus(id);
        const elem = <Page index={status.index} />
        setContent(elem);
      } else {
        setContent(<NotFound />);
      }
    };

    get();
  }, [id]);

  return content;
};

export const ProblemStatus = () => (<h1>Status</h1>);
