#!/usr/bin/env bash
# Chep y nguyen chot kiem frontend cua deploy.sh tu 11/06 toi 30/07/2026:
# wget BEN TRONG container — ma anh node:*-slim KHONG co wget.
C=$1
for i in $(seq 1 6); do
  if docker exec "$C" sh -c "wget -qO- http://localhost:3000/ >/dev/null 2>&1"; then
    echo "✓ Frontend healthy"
    break
  fi
  [ "$i" -lt 6 ] && sleep 5
done
# (het vong lap: KHONG co dong nao bao that bai — script di tiep)
