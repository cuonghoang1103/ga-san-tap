#!/usr/bin/env bash
# restart-next.sh — khoi dong lai Next theo CONG, co hau dieu kien
set -euo pipefail
PORT=${1:-3000}
holder() { ss -ltnpH "sport = :$PORT" | grep -o 'pid=[0-9]*' | cut -d= -f2 || true; }
old=$(holder); echo "cu: ${old:-khong ai}"
[ -n "$old" ] && fuser -k "$PORT/tcp" || true
for i in $(seq 1 10); do [ -z "$(holder)" ] && break; sleep 0.5; done
if [ -n "$(holder)" ]; then echo "cong $PORT van bi giu: $(holder)"; exit 1; fi
nohup npm start > next.log 2>&1 &
for i in $(seq 1 30); do curl -s -o /dev/null "http://127.0.0.1:$PORT/" && break; sleep 0.5; done
new=$(holder); echo "moi: ${new:-KHONG LEN}"
if [ -z "$new" ] || [ "$new" = "$old" ]; then echo "server khong doi"; exit 1; fi
