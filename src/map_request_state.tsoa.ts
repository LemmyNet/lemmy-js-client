// Does not return `RequestState<ResultT>` so that it doesnt become part of OpenAPI spec.
export function mapToRequestState<ResultT>(
  _useRequestState: boolean,
  result?: ResultT,
  _error?: Error,
): ResultT | undefined {
  return result;
}
