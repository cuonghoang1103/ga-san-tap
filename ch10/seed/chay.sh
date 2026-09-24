#!/usr/bin/env bash
# Dung lai 08/08/2026 18:17 → 18:39 (+07): doi enum, qua sach checklist, seed vo o "prod".
set -u
R() { echo "\$ $*"; "$@" 2>&1 | grep -v -e '^npm notice' -e '^Environment variables' -e '^Prisma schema loaded' -e '^$' | sed 's/^/  /'; echo "  → rc=${PIPESTATUS[0]}"; }
export DATABASE_URL=postgresql://postgres:postgres@localhost:5432/prod
R npx prisma migrate deploy
R npx prisma generate
echo "## 1. checklist 'xanh'"
R npx tsc --noEmit
echo "tsc doc bao nhieu tep trong prisma/? $(npx tsc --listFilesOnly | grep -c '/prisma/')  (src/: $(npx tsc --listFilesOnly | grep -c '/src/'))"
echo "## 2. tsconfig.seed 'ngay tho' (extends, chi them include prisma/**)"
cp sua/tsconfig.seed.ngay-tho.json tsconfig.seed.ngay-tho.json
R npx tsc -p tsconfig.seed.ngay-tho.json --noEmit
echo "## 3. tsconfig.seed.json that (noEmit + rootDir .) — VAN giu union chep tay"
R npm run -s typecheck:seed
echo "## 4. chay seed that (nhu buoc seed cua deploy)"
R npx prisma db seed
psql "$DATABASE_URL" -X -A -F ' | ' -c "select suggested_type, title from content_ideas order by id"
echo "## 5. ban va: import ContentType tu @prisma/client — con 'CODE'"
cp sua/seed.ts prisma/seed.ts
R npm run -s typecheck:seed
echo "## 6. sua 'CODE' → 'CODE_REVIEW', kiem lai roi chay"
sed -i "s/suggestedType: 'CODE' }/suggestedType: 'CODE_REVIEW' }/" prisma/seed.ts
R npm run -s typecheck:seed
psql "$DATABASE_URL" -qc "truncate content_ideas"
R npx prisma db seed
psql "$DATABASE_URL" -X -A -F ' | ' -c "select suggested_type, title from content_ideas order by id"
