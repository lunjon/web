import React from "react";
import Media from "react-media";

const Home = () => {
  return (
    <Media queries={{
      small: '(max-width: 700px)',
    }}>
      {(size) => size.small ? <h1>Small screen</h1> : <h1>BIG screen</h1>}
    </Media >
  )
};

export default Home;
