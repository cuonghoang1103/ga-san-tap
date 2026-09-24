#!/usr/bin/env bash
# Ban siet: CHI chap nhan cac ma bao "route co mount" (200/401/403). Con lai — ke ca rong / 000 — la hong.
C=$1
code=$(docker exec "$C" node -e "require('http').get('http://127.0.0.1:3000/api/v1/gifs',r=>console.log(r.statusCode)).on('error',()=>console.log('000'))" 2>/dev/null)
case "$code" in
  200|401|403) echo "✓ /api/v1/gifs mounted (HTTP ${code})" ;;
  *) echo "✗ /api/v1/gifs → '${code:-rong}' (khong phai 200/401/403)"; exit 1 ;;
esac
