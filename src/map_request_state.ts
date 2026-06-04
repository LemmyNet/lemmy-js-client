import { RequestState } from "./request_state";

export function mapToRequestState<ResultT>(
  result?: ResultT,
  error?: Error,
): RequestState<ResultT> {
  if (error) {
    return { state: "failed", err: error };
  }
  if (result !== undefined) {
    return { state: "success", data: result };
  }
  return { state: "empty" };
}
