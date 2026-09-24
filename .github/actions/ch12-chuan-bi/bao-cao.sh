#!/usr/bin/env bash
# Script đi kèm composite action — gọi bằng "$GITHUB_ACTION_PATH/bao-cao.sh".
echo "GITHUB_ACTION_PATH = $GITHUB_ACTION_PATH"
echo "thu muc lam viec   = $PWD"
echo "tep canh action    : $(ls "$GITHUB_ACTION_PATH" | tr '\n' ' ')"
