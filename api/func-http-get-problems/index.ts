import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { HttpResponse } from "../common";
import { problems } from "../common/problems";

const httpTrigger: AzureFunction = async function(context: Context, _req: HttpRequest): Promise<HttpResponse> {
  context.log("Fetching all problems for user");

  return {
    status: 200,
    body: problems,
  };

};

export default httpTrigger;
