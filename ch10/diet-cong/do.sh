#!/usr/bin/env bash
# Tai lap ca /playground (30/07/2026): (1) Next chot danh sach public/ luc KHOI DONG,
# (2) diet theo TEN truot, diet theo CONG trung. Do that, khong doan.
set -u
V=$1; CACH=$2; P=19101
mkdir -p app/pages app/public && cd app
npm init -y >/dev/null
npm i --no-audit --no-fund --loglevel=error next@"$V" react@18 react-dom@18
node -e "const p=require('./package.json');p.scripts={start:'next start -p $P'};require('fs').writeFileSync('package.json',JSON.stringify(p,null,1))"
echo "export default function Home(){return <h1>san choi</h1>}" > pages/index.js
if [ "$CACH" = standalone ]; then echo "module.exports={output:'standalone'}" > next.config.js; fi
echo "tep co TRUOC khi khoi dong" > public/cu.txt
npx next build >/dev/null 2>&1 && echo "build xong: next $(node -p "require('next/package.json').version")"
PUB=public
bat() {
  case "$CACH" in
    next-start) nohup ./node_modules/.bin/next start -p $P > "srv$1.log" 2>&1 & ;;
    npm-start)  nohup npm start > "srv$1.log" 2>&1 & ;;
    standalone) cp -r public .next/standalone/ ; cp -r .next/static .next/standalone/.next/
                PORT=$P nohup node .next/standalone/server.js > "srv$1.log" 2>&1 & ;;
  esac
}
cho() { for i in $(seq 1 30); do curl -s -o /dev/null "http://127.0.0.1:$P/" && return 0; sleep 0.5; done; return 1; }
ma() { curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:$P/$1"; }
[ "$CACH" = standalone ] && PUB=.next/standalone/public
bat 1; cho || { echo "server 1 khong len"; cat srv1.log; exit 1; }
echo "=== (1) public/ chot luc khoi dong ==="
echo "cu.txt  (co truoc khi khoi dong): HTTP $(ma cu.txt)"
echo "tep MOI, ghi sau khi server da chay" > $PUB/moi.txt
echo "moi.txt (ghi SAU khi khoi dong): HTTP $(ma moi.txt)"
ls -la $PUB/moi.txt | awk '{print "tren dia:", $5, "byte", $NF}'
echo "=== (2) cay tien trinh ==="
ps -eo pid,ppid,comm,args --sort=pid | awk 'NR==1 || /next|server\.js|npm start/' | grep -v -e awk -e do.sh | cut -c1-110
echo "--- ai giu cong $P ---"
ss -ltnpH "sport = :$P" | sed -E 's/.*users:/users:/'
case "$CACH" in standalone) PAT="standalone/server.js" ;; *) PAT="next start" ;; esac
echo "=== (3) pkill -f \"$PAT\" ==="
echo "pgrep -f khop:"; pgrep -af "$PAT" | grep -v do.sh | cut -c1-100
pkill -f "$PAT"; echo "pkill rc=$?"
sleep 3
echo "sau 3 giay, ai con giu cong $P: $(ss -ltnpH "sport = :$P" | grep -o 'pid=[0-9]*' || echo KHONG AI)"
ps -eo pid,ppid,comm,args | awk '/next|server\.js/' | grep -v -e awk -e do.sh | cut -c1-110
echo "=== (4) khoi dong lai ngay ==="
bat 2; sleep 4; echo "srv2.log:"; tail -n 6 srv2.log | cut -c1-120
echo "moi.txt luc nay: HTTP $(ma moi.txt)"
echo "=== (5) diet theo CONG ==="
echo "lsof la: $(command -v lsof) · $(lsof -v 2>&1 | grep -m1 -i revision)"
echo "lsof -ti:$P (user $(whoami)): '$(lsof -ti:$P 2>&1)' rc=$?"
echo "lsof -nP -iTCP:$P -sTCP:LISTEN:"; lsof -nP -iTCP:$P -sTCP:LISTEN 2>&1 | head -3
echo "sudo lsof -ti:$P: '$(sudo lsof -ti:$P 2>&1 | tr '\n' ' ')'"
echo "ss -ltnpH sport = :$P → $(ss -ltnpH "sport = :$P" | grep -o 'pid=[0-9]*')"
echo "fuser $P/tcp → '$(fuser $P/tcp 2>/dev/null)'"
lsof -ti:$P | xargs -r kill -9; sleep 1
echo "sau 'lsof -ti:$P | xargs -r kill -9': ss con thay $(ss -ltnpH "sport = :$P" | grep -o 'pid=[0-9]*' || echo 'KHONG AI')"
fuser -k -KILL $P/tcp >/dev/null 2>&1; sleep 1
echo "sau 'fuser -k $P/tcp': ss con thay $(ss -ltnpH "sport = :$P" | grep -o 'pid=[0-9]*' || echo 'KHONG AI')"
bat 3; cho && echo "server 3 len: $(ss -ltnpH "sport = :$P" | grep -o 'pid=[0-9]*')"; echo "moi.txt sau khi khoi dong lai: HTTP $(ma moi.txt)"
fuser -k -KILL $P/tcp >/dev/null 2>&1 || true
