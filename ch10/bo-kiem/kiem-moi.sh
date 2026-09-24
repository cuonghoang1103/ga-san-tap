#!/usr/bin/env bash
# Ban va 30/07/2026: node -e (anh LUON co node) + co frontend_ok + that bai TO.
C=$1
frontend_ok=false
for i in $(seq 1 6); do
  if docker exec "$C" node -e '
const req = require("http").get({ host: "127.0.0.1", port: 3000, path: "/" }, (res) => {
  process.exit(res.statusCode >= 200 && res.statusCode < 500 ? 0 : 1)
})
req.on("error", () => process.exit(1))
req.setTimeout(10000, () => { req.destroy(); process.exit(1) })
' >/dev/null 2>&1; then
    echo "✓ Frontend healthy"; frontend_ok=true; break
  fi
  [ "$i" -lt 6 ] && sleep "${NGHI:-5}"
done
if [ "$frontend_ok" = false ]; then
  echo "✗ Frontend khong phan hoi sau 6 lan thu"; exit 1
fi
