#!/bin/bash

new_tag="$1"

pnpm version $new_tag
git push
git tag $new_tag
git push origin $new_tag
