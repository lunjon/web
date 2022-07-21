export interface Attempt {
  value: any,
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

export const results: Problem[] = [];
