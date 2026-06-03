#!/bin/sh
set -e

cp src/map_request_state.tsoa.ts src/map_request_state.ts
npx tsoa spec-and-routes && tsc && npx redocly build-docs tsoa_build/swagger.json
cp src/map_request_state.main.ts src/map_request_state.ts
if grep -q RequestState tsoa_build/swagger.json; then
    RED='\033[0;33m'
    echo -e "${RED}OpenAPI specification should not contain RequestState!"
    exit 1
fi
