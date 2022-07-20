export interface Info {
  index: number;
  title: string;
}

export interface Attempt {
  value: any;
  datetime: string;
}

export interface Status {
  passed: boolean;
  attempts: Attempt[],
}

export interface Context {
  info: Info;
  status: Status;
}

export interface StatusResponse {
  index: number;
  status: Status;
}
