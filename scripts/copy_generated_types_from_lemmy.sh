#!/bin/bash
set -e

CWD="$(cd -P -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

cd "$CWD/../"

# Remove the old types
rm -rf src/types/*

# Remove the old bindings
pushd ../lemmy/crates
rm -rf */**/bindings
popd

# First re-generate the types by running cargo test on lemmy
pushd ../lemmy
pwd
../lemmy-js-client/scripts/ts_bindings_check.sh
cargo test --workspace export_bindings --features ts-rs

pushd ../lemmy/crates

# Copy them over to the types folder
find . -type f -name "*.ts" -exec cp {} ../../lemmy-js-client/src/types/ \;

popd

# Remove the Sensitive type
rm src/types/Sensitive.ts || true

# Remove the federation queue state since it gets flattened and isnt used.
rm src/types/FederationQueueState.ts || true

# Change all the bigints to numbers
find src/types -type f -name '*.ts' -exec sed -i 's/bigint/number/g' {} +

# on MacOS:
# find src/types -type f -name '*.ts' -exec sed -i '' -e 's/bigint/number/g' {} \;

node putTypesInIndex.js

pnpm prettier -w src
