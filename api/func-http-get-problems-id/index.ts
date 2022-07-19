import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { HttpResponse } from "../common";
import { problems } from "../common/problems";

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<HttpResponse> {
  const index = req.params["index"];
  if (!index) {
    return { status: 404 };
  }

  try {
    const n = parseInt(index);
    context.log(`Trying to fetch problem with index ${n}`);

    const p = problems.find(p => p.index === n);
    if (p) {
      context.log("Found!");
      return {
        status: 200,
        body: p,
      };
    }

    return { status: 404 };
  } catch (_) {
    return { status: 404 };
  }
};

export default httpTrigger;
