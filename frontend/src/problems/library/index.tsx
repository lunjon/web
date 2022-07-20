import "./problems.css";
import { ReactNode } from "react";
import { p1 } from "./descriptions";

interface ProblemInfo {
  index: number;
  title: string;
  description: ReactNode;
}

const library: ProblemInfo[] = [
  {
    index: 1,
    title: "Collatz Sequence",
    description: p1,
  },
  {
    index: 2,
    title: "TODO",
    description: (<></>),
  },
];

const Library = {
  getByIndex(index: number) {
    const p = library.find(info => info.index === index);
    if (!p) {
      throw new Error(`Unknown problem index: ${index}`);
    }
    return p;
  }
};

export default Library;
