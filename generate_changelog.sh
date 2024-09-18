#!/bin/sh
set -e

# Adding to RELEASES.md
git cliff --output RELEASES.md
prettier -w RELEASES.md
