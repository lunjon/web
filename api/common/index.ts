export interface HttpResponse {
  status: number;
  body: any;
  headers?: [string: string];
}
