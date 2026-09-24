#!/bin/bash
set -euo pipefail
echo "tham so \$1        = $1"
echo "INPUT_TEN         = ${INPUT_TEN:-<rong>}"
echo "may trong container: $(. /etc/os-release; echo "$PRETTY_NAME") · jq $(jq --version)"
echo "GITHUB_WORKSPACE  = $GITHUB_WORKSPACE (pwd = $PWD)"
echo "GITHUB_OUTPUT     = $GITHUB_OUTPUT"
echo "loi-chao=Xin chao $1 tu Docker action" >> "$GITHUB_OUTPUT"
