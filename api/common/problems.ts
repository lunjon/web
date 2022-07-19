export interface Status {
  passed: boolean;
}

export interface Problem {
  id: string;
  index: number;
  title: string;
  description: string;
  status: Status;
}

export const problems: Problem[] = [
  {
    id: "abc-123",
    index: 1,
    title: "Collatz Numbers",
    description: "todo",
    status: {
      passed: false,
    }
  },
  {
    id: "def-456",
    index: 2,
    title: "Numerical Function Analysis",
    description: "todo",
    status: {
      passed: false,
    }
  },
];
