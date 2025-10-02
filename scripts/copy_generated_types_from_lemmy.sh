#!/bin/bash
set -e

# on MacOS:
# find src/types -type f -name '*.ts' -exec sed -i '' -e 's/bigint/number/g' {} \;

# Parse LemmyErrorType and convert it to array.
ALL_ERRORS=$(cat src/types/LemmyErrorType.ts | \
perl -nle 'm/\{ \s*error:\s*"(.*?)" \}/; print $1' | \
sed '/^[[:space:]]*$/d'| \
sed 's/^/"/;s/$/"/' | \
tr '\n' ',')
echo "export type AllLemmyErrors = [$ALL_ERRORS];" > src/types/AllLemmyErrors.ts

node putTypesInIndex.js

pnpm prettier -w src
