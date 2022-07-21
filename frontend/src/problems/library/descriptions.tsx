import Container from "react-bootstrap/Container";

const niceLink = (ref: string, text: string) => (
  <a rel="noreferrer" href={ref} target="_blank">{text}</a>);

export const p1 = (<Container className="description">
  <p>
    A {niceLink("https://en.wikipedia.org/wiki/Collatz_conjecture", "Collatz sequence ")}
    is the sequence of numbers yielded when calculating the function.
  </p>

  <p>Starting with the number 3456, what is the sum of the numbers in the sequence (including the starting value)?</p>
</Container>);


export const p2 = (<Container className="description">
  <p>
    Given the beautiful text of {niceLink("/data/p2.txt", "Lorem Ipsum")}, counting the number of occurences for each letter yields
    its frequency.
  </p>

  <p>What is the sum of all the letters frequencies in the text?</p>
</Container>);

export const p3 = (<Container className="description">
  <p>
    <em>Blah blah flavor text</em>: <br />

    <img src="/figures/p3-eq.png" alt="Equation" />
  </p>

  <p>Finding a root for the function by hand proves to be very hard.<br />
    An alternative is to use numerical analysis with e.g. the {niceLink("https://en.wikipedia.org/wiki/Bisection_method", "Bisection method")}.
    A value of at least 4 decimals is required for the calculations to be correct. What is the root value?
  </p>
</Container>);

