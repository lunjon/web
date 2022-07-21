export interface Attempt {
  value: any,
  correct: boolean;
  datetime: string;
}

export interface Status {
  passed: boolean;
  attempts: Attempt[],
}

export interface Problem {
  index: number;
  status: Status;
}

export const results: Problem[] = [
  {
    index: 1,
    status: {
      passed: true,
      attempts: [],
    }
  },
  {
    index: 2,
    status: {
      passed: true,
      attempts: [],
    }
  },
  {
    index: 3,
    status: {
      passed: false,
      attempts: [],
    }
  },
];
