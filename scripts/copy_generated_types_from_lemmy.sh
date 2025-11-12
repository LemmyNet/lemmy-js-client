#!/bin/bash
set -e

CWD="$(cd -P -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

cd "$CWD/../"

# Remove the old types
rm -rf src/types/*

# Remove the old bindings
pushd ../lemmy/crates
find . -name bindings -type d -exec rm -rf {} \; || true
popd

# First re-generate the types by running cargo test on lemmy
pushd ../lemmy

# Export the ts-rs bindings
cargo test --workspace export_bindings --features ts-rs

pushd crates

# Copy them over to the types folder
find . -type f -name "*.ts" -exec cp {} ../../lemmy-js-client/src/types/ \;

popd
popd

# Make sure that all fields use `?` and not `| null`
CONTAINS_NULL=$(grep -nr --include=\*.ts ' | null' src/ || true)

if [ -n "$CONTAINS_NULL" ]; then
  echo -e "Error: missing derive attribute 'ts(optional_fields)':"
  echo "$CONTAINS_NULL"
  exit 1
fi

# Remove the Sensitive type
rm src/types/SensitiveString.ts || true

# Change all the bigints to numbers
find src/types -type f -name '*.ts' -exec sed -i 's/bigint/number/g' {} +

# on MacOS:
# find src/types -type f -name '*.ts' -exec sed -i '' -e 's/bigint/number/g' {} \;

# Parse LemmyErrorType and convert it to array.
pnpm prettier -w src/types/LemmyErrorType.ts
ALL_ERRORS=$(cat src/types/LemmyErrorType.ts | perl -nle 'm/\{ \s*error:\s*"(.*?)" \}/; print $1' | sed '/^[[:space:]]*$/d' | sed 's/^/"/;s/$/"/' | tr '\n' ',')
echo "export const AllLemmyErrors = [$ALL_ERRORS];" >src/types/AllLemmyErrors.ts

node putTypesInIndex.js

pnpm prettier -w src
