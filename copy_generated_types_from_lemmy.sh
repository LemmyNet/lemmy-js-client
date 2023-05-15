#!/bin/bash

# First re-generate the types by running cargo test on lemmy
cd ../lemmy/scripts
./test.sh

cd ../crates

# Copy them over to the types folder
cp api_common/bindings/* ../../lemmy-js-client/src/types/
cp db_schema/bindings/* ../../lemmy-js-client/src/types/
cp db_views/bindings/* ../../lemmy-js-client/src/types/
cp db_views_actor/bindings/* ../../lemmy-js-client/src/types/
cp db_views_moderator/bindings/* ../../lemmy-js-client/src/types/

# Change all the bigints to numbers
find ../../lemmy-js-client/src/types -type f -name '*.ts' -exec sed -i 's/bigint/number/g' {} +

node ../../lemmy-js-client/putTypesInIndex.js
