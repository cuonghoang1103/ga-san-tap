#!/usr/bin/env bash
# ghi.sh <truong> <gia-tri> <nhan> — "chạm vào production" giả lập: sửa MỘT dòng trong production.txt
# trên nhánh ch09-prod (qua API contents). Mỗi lần ghi là một commit có giờ ⇒ lịch sử nhánh = dòng thời gian sự cố.
# KHÔNG thử lại khi bị 409: hai lượt ghi chen nhau thì lượt sau HỎNG, như "container is running" ngày 06/07/2026.
set -euo pipefail
TRUONG=$1; GIA_TRI=$2; NHAN=$3
API="repos/${GITHUB_REPOSITORY}/contents/production.txt"
J=$(gh api "$API?ref=ch09-prod")
SHA=$(jq -r .sha <<<"$J")
CU=$(jq -r .content <<<"$J" | base64 -d)
MOI=$(printf '%s\n' "$CU" | sed "s/^${TRUONG}=.*/${TRUONG}=${GIA_TRI}/")
echo "[$(date -u +%T)] $NHAN: $TRUONG -> $GIA_TRI"
printf '%s\n' "$MOI" | sed 's/^/    /'
gh api -X PUT "$API" -f branch=ch09-prod -f sha="$SHA" \
  -f message="$(date -u +%T) ${NHAN}: ${TRUONG}=${GIA_TRI}" \
  -f content="$(printf '%s\n' "$MOI" | base64 -w0)" --jq '.commit.sha[0:8]'
