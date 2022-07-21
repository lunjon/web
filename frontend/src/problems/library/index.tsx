import "./style.css";
import { ReactNode } from "react";
import * as Descriptions from "./descriptions";

interface ProblemInfo {
  index: number;
  title: string;
  description: ReactNode;
}

const library: ProblemInfo[] = [
  {
    index: 1,
    title: "Collatz Sequence",
    description: Descriptions.p1,
  },
  {
    index: 2,
    title: "Letter frequency",
    description: Descriptions.p2,
  },
  {
    index: 3,
    title: "Numerical analysis 1",
    description: Descriptions.p3,
  },
];

const Library = {
  tryByIndex(index: number) {
    return library.find(info => info.index === index);
  },
  getByIndex(index: number) {
    const p = library.find(info => info.index === index);
    if (!p) {
      throw new Error(`Unknown problem index: ${index}`);
    }
    return p;
  },
};

export default Library;
