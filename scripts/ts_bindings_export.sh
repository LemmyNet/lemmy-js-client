#!/usr/bin/env bash
set -e

pushd ../lemmy

# Export the ts-rs bindings
cargo test --workspace export_bindings --features ts-rs

# Make sure no rows are returned
! grep -nr --include=\*.ts ' | null' ./crates/
