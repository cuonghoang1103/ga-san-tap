#!/usr/bin/env bash
# Chay tren MAY CUA BAN (Mac/Linux co Docker + gh da dang nhap, co quyen admin kho).
# 1) xin registration token + remove token  2) chay container ephemeral
# 3) kich workflow_dispatch ch13-tu-host.yml  4) cho container tu thoat  5) kiem runner da bien mat.
set -euo pipefail
KHO="${KHO:-cuonghoang1103/ga-san-tap}"
NHANH="${NHANH:-ch13-runner}"
TEN="ga13-runner-$(date +%s)"

REG=$(gh api -X POST "repos/$KHO/actions/runners/registration-token" --jq .token)
REM=$(gh api -X POST "repos/$KHO/actions/runners/remove-token" --jq .token)

docker build -t ga13-runner "$(dirname "$0")"
docker run -d --rm --name "$TEN" \
  -e REPO_URL="https://github.com/$KHO" -e RUNNER_TOKEN="$REG" -e REMOVE_TOKEN="$REM" \
  -e RUNNER_NAME="$TEN" -e RUNNER_LABELS=ch13-tam-thoi \
  --memory 2g --cpus 2 ga13-runner

# cho runner online roi moi kich job
for i in $(seq 1 30); do
  gh api "repos/$KHO/actions/runners" --jq ".runners[] | select(.name==\"$TEN\") | .status" | grep -q online && break
  sleep 2
done
gh workflow run ch13-tu-host.yml --repo "$KHO" --ref "$NHANH"

# container --rm tu bien mat khi run.sh thoat (sau DUNG MOT job)
docker wait "$TEN" 2>/dev/null || true
echo "--- runner con lai tren kho (phai KHONG con $TEN):"
gh api "repos/$KHO/actions/runners" --jq '.runners[] | "\(.id) \(.name) \(.status)"'
