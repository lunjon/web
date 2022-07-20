import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { HttpResponse } from "../common";
import { results } from "../common/problems";

const httpTrigger: AzureFunction = async function(context: Context, _req: HttpRequest): Promise<HttpResponse> {
  context.log("Fetching all problem statuses for user");

  return {
    status: 200,
    body: results,
  };

};

export default httpTrigger;
