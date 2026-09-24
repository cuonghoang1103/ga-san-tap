#!/usr/bin/env bash
# Chep y nguyen vong smoke-test cua deploy.sh (api-backend, 02/07/2026 17:07):
# goi KHONG xac thuc tu BEN TRONG container; 404 = route chua mount = ban dung cu.
C=${1:-ch10-api}
smoke_failed=false
for route in gifs messages/threads profile courses; do
  code=$(docker exec "$C" node -e "require('http').get('http://127.0.0.1:3001/api/v1/${route}',r=>{console.log(r.statusCode)}).on('error',()=>console.log('000'))" 2>/dev/null)
  if [ "$code" = "404" ]; then
    echo "✗ Route /api/v1/${route} → 404 (NOT mounted — stale/partial build)"
    smoke_failed=true
  else
    echo "✓ Route /api/v1/${route} mounted (HTTP ${code})"
  fi
done
if [ "$smoke_failed" = true ]; then
  echo "::error title=Smoke-test FAILED::route loi 404 → anh dang chay la ban dung CU. Chay lai deploy DAY DU (khong --no-build)."
  exit 1
fi
