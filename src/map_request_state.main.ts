import { RequestState } from "./request_state";

export function mapToRequestState<ResultT>(
  useRequestState: boolean,
  result?: ResultT,
  error?: Error,
): RequestState<ResultT> | ResultT | undefined {
  if (!useRequestState) {
    return result;
  }
  if (error) {
    return { state: "failed", err: error };
  }
  if (result !== undefined) {
    return { state: "success", data: result };
  }
  return { state: "empty" };
}
