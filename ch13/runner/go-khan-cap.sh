#!/usr/bin/env bash
# Go KHAN CAP: dung container va xoa MOI runner ten ga13-runner-* khoi kho qua API.
set -euo pipefail
KHO="${KHO:-cuonghoang1103/ga-san-tap}"
docker ps -q --filter "name=ga13-runner-" | xargs -r docker stop
gh api "repos/$KHO/actions/runners" --jq '.runners[] | select(.name|startswith("ga13-runner-")) | .id' |
  while read -r id; do gh api -X DELETE "repos/$KHO/actions/runners/$id" && echo "da xoa runner $id"; done
