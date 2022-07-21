import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { HttpResponse } from "../common";
import { results } from "../common/problems";

const notFound = { status: 404 };

function validateParam(value: string | undefined) {
  if (!value) {
    return [false, 0];
  }

  try {
    const n = parseInt(value);
    return [true, n];
  } catch(_) {
    return [false, 0];
  }
}

/**
* Gets the status for a problem by index: GET /problems/:index/status
* Only if the problem is avaible for the user a response of 200 is returned.
*/
const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<HttpResponse> {
  const param = req.params["index"];
  const [valid, index] = validateParam(param);
  if (!valid) {
    return notFound;
  }

  // TODO:
  //  - fetch results from DB

  try {
    const p = results.find(p => p.index === index);
    if (!p) {
      const res = index === 1
        ? {status: 200, body: { index: 1, status: {passed: false, attempts: []} }}
        : notFound;
      return res;
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
