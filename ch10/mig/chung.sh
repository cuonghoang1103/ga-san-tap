# ham dung chung: chay prisma, bo dong nhieu, in ma thoat THAT (PIPESTATUS, khong phai cua grep)
BASE=postgresql://postgres:postgres@localhost:5432
P() { echo "\$ prisma $*"; npx prisma "$@" 2>&1 | grep -v -e '^npm notice' -e '^Prisma schema loaded' -e '^Environment variables loaded' -e '^$' | sed 's/^/  /'; echo "  → rc=${PIPESTATUS[0]}"; }
Q() { psql "$1" -X -A -F ' | ' -c "$2"; }
