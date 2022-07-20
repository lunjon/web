import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { HttpResponse } from "../common";
import { problems } from "../common/problems";

const notFound = { status: 404 };

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<HttpResponse> {
  const index = req.params["index"];
  if (!index) {
    return notFound;
  }

  try {
    const n = parseInt(index);
    context.log(`Trying to fetch problem with index ${n}`);

    const p = problems.find(p => p.index === n);
    if (!p) {
      return notFound;
    }

    return {
      status: 200,
      body: p,
    };
  } catch (_) {
    return notFound;
  }
};

export default httpTrigger;
