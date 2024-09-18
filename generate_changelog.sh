#!/bin/sh
set -e

# Creating the new tag
new_tag="$1"

# Prepending to the RELEASES.md
git cliff --tag "$new_tag" --output RELEASES.md
prettier -w RELEASES.md
