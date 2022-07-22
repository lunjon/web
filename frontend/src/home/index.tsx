import React from "react";
import Media from "react-media";
import { useErrorHandler } from "../errors";

const Home = () => {
  const setError = useErrorHandler();

  const test = () => {
    try {
      throw new Error("TEST");
    } catch (err) {
      if (err instanceof Error) {
        setError("Shit", err);
      }
    }
  };

  return (
    <Media queries={{
      small: '(max-width: 700px)',
    }}>
      {(size) => size.small
        ? <h1>Small screen</h1>
        : <button onClick={test}>Show error</button>
      }
    </Media >
  )
};

export default Home;
