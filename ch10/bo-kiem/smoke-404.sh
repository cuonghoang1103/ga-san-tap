#!/usr/bin/env bash
# Logic smoke-test route cua deploy.sh: chi coi "404" la hong — moi so khac la "mounted".
C=$1
code=$(docker exec "$C" node -e "require('http').get('http://127.0.0.1:3000/api/v1/gifs',r=>console.log(r.statusCode)).on('error',()=>console.log('000'))" 2>/dev/null)
if [ "$code" = "404" ]; then echo "✗ /api/v1/gifs → 404"; exit 1; fi
echo "✓ /api/v1/gifs mounted (HTTP ${code})"
