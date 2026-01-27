#!/bin/bash
set -e

CWD="$(cd -P -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

cd "$CWD/../"

# Remove the old types
rm -rf src/types/*

lemmy_dir=../lemmy

# Remove the old bindings
find ${lemmy_dir}/crates -name bindings -type d -exec rm -rf {} \; || true

# First re-generate the types by running cargo test on lemmy
# Export the ts-rs bindings
pushd $lemmy_dir
cargo test --workspace export_bindings --features ts-rs
popd

# Copy them over to the types folder
find ${lemmy_dir}/crates -type f -name "*.ts" -exec cp {} src/types/ \;

# Make sure that all fields use `?` and not `| null`
CONTAINS_NULL=$(grep -nr --include=\*.ts ' | null' src/ || true)

if [ -n "$CONTAINS_NULL" ]; then
  echo -e "Error: missing derive attribute 'ts(optional_fields)':"
  echo "$CONTAINS_NULL"
  exit 1
fi

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
