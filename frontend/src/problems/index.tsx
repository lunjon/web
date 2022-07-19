import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Model from "./model";
import { NotFound } from "../common";
export { ProblemList } from "./list";

async function fetchProblem(index: number | string) {
  // TODO: handle error
  const res = await fetch(`/api/problems/${index}`);
  const model: Model = await res.json();
  return model;
}

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
        const model = await fetchProblem(id);

        const elem = (<Container>
          <h1>Problem {model.index}</h1>

          <p>{model.description}</p>
        </Container>);

        setContent(elem);
      } else {
        setContent(<NotFound />);
      }
    };

    get();
  }, [id]);

  return (
    <div>
      {content}
    </div>
  )
};

export const ProblemStatus = () => (<h1>Status</h1>);
