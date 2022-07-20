export interface Info {
  id: string;
  index: number;
  title: string;
}

export interface Status {
  passed: boolean;
}

export interface Context {
  info: Info;
  status: Status;
}

export interface ProblemResponse extends Info {
  index: number;
  status: Status;
}
