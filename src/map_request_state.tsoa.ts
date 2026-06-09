// Does not return `RequestState<ResultT>` so that it doesnt become part of OpenAPI spec.
export function mapToRequestState<ResultT>(
  result?: ResultT,
  _error?: Error,
): ResultT | undefined {
  return result;
}
