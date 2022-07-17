import { AzureFunction, Context, HttpRequest } from "@azure/functions"

interface HttpResponse {
  status: number;
  body: any;
  headers?: [string: string];
}

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<HttpResponse> {
  context.log('HTTP trigger function processed a request.');
  const name = (req.query.name || (req.body && req.body.name));
  const responseMessage = name
    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  return {
    status: 200,
    body: responseMessage
  };

};

export default httpTrigger;
