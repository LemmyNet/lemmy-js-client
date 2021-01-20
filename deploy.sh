#!/bin/bash

new_tag="$1"

git tag $new_tag
git push origin $new_tag
