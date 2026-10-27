#!/bin/sh
set -e

swagger_file=tsoa_build/swagger.json
cp src/map_request_state.tsoa.ts src/map_request_state.ts
npx tsoa spec-and-routes && tsc

# Replace all doubles with int32, since tsoa generates only doubles even from integers.
# See https://github.com/LemmyNet/lemmy-js-client/issues/1037
sed -i 's/double/int32/g' $swagger_file
sed -i 's/"type": "number"/"type": "integer"/g' $swagger_file

npx redocly build-docs $swagger_file
cp src/map_request_state.main.ts src/map_request_state.ts
if grep -q RequestState $swagger_file; then
  RED='\033[0;33m'
  echo -e "${RED}OpenAPI specification should not contain RequestState!"
  exit 1
fi
