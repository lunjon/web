export interface Status {
  passed: boolean;
}

export interface Problem {
  index: number;
  status: Status;
}

export const problems: Problem[] = [
  {
    index: 1,
    status: {
      passed: true,
    }
  },
  {
    index: 2,
    status: {
      passed: false,
    }
  },
];
