#!/usr/bin/env bash
# Chep y nguyen chot kiem frontend cua deploy.sh tu 11/06 toi 30/07/2026 (dong 508–516 truoc commit 0fd0c0c6):
# wget BEN TRONG container — ma anh node:*-slim KHONG co wget.
set -euo pipefail
C=$1
echo "Checking frontend..."
for i in $(seq 1 6); do
    if docker exec "$C" \
           sh -c "wget -qO- http://localhost:3000/ >/dev/null 2>&1"; then
        echo "✓ Frontend healthy"
        break
    fi
    [ "$i" -lt 6 ] && sleep 5
done

# ── Step 4b: Route smoke-test … (deploy.sh di tiep o day) ──
echo "→ sang buoc 4b"
