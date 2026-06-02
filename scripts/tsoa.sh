echo "
export function mapToRequestState<ResultT>(
  _useRequestState:boolean,
  result?: ResultT,
  _error?: Error,
) {
 return  result;
}
" > src/map_request_state.ts
npx tsoa spec-and-routes && tsc && npx redocly build-docs tsoa_build/swagger.json
git checkout --  src/map_request_state.ts