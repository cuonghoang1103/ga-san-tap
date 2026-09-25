#!/bin/bash
# trien-khai.sh <anh> — chay TREN "VPS" qua SSH. Keo anh, trao container app. KHONG tu kiem suc khoe:
# viec do do workflow lam tu BEN NGOAI (di dung duong nguoi dung di), roi quyet dinh co quay lui hay khong.
set -euo pipefail
ANH="$1"
: "${DB_PASSWORD:?thieu DB_PASSWORD}"
MANG=ch15-net
cd /srv/phong-kham

docker network inspect "$MANG" >/dev/null 2>&1 || docker network create "$MANG" >/dev/null
if ! docker inspect ch15-db >/dev/null 2>&1; then
  echo "[vps] chua co Postgres -> tao ch15-db"
  docker pull -q postgres:17-alpine >/dev/null
  docker run -d --name ch15-db --network "$MANG" -e POSTGRES_PASSWORD="$DB_PASSWORD" postgres:17-alpine >/dev/null
fi

TRUOC=$(docker ps -a --filter name=^ch15-app$ --format '{{.Image}}')
TRUOC=${TRUOC:-khong-co}
echo "[vps] dang chay: $TRUOC"
echo "[vps] keo: $ANH"
docker pull -q "$ANH"
docker rm -f ch15-app >/dev/null 2>&1 || true
docker run -d --name ch15-app --network "$MANG" -p 19153:3000 --restart unless-stopped \
  -e DATABASE_URL="postgres://postgres:${DB_PASSWORD}@ch15-db:5432/postgres" "$ANH" >/dev/null
echo "$TRUOC" > truoc
echo "$ANH" > dang-chay
echo "[vps] da trao: $TRUOC -> $ANH"
