import { ReactNode } from "react";
import Container from "react-bootstrap/Container";

interface ProblemInfo {
  index: number;
  title: string;
  description: ReactNode;
}

const library: ProblemInfo[] = [
  {
    index: 1,
    title: "Collatz Sequence",
    description: (<Container>
      <p>A <a rel="noreferrer" href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank">Collatz sequence</a> is the sequence of numbers yielded when calculating the function. Starting with the number 3456, what is the sum of the numbers in the sequence (including the starting value)?
      </p>
    </Container>),
  },
  {
    index: 2,
    title: "Collatz Sequence",
    description: (<></>),
  },
];

const Library = {
  get(index: number) {
    return library.find(info => info.index === index);
  }
};

export default Library;
