#!/usr/bin/env bash
# Migration hong o cau thu 3/3: hai cau dau CON LAI trong DB khong? (Postgres + Prisma 5.22)
set -u; source ./chung.sh
export DATABASE_URL=$BASE/giaodich
P migrate deploy >/dev/null; echo "(da ap 0_init + add_notes_subject_share tren DB sach)"
NV=prisma/migrations/20260710120000_add_tags
mkdir -p $NV && cp sua/nua-voi.sql $NV/migration.sql
echo "## 1. deploy migration hong o cau thu 3"
P migrate deploy
echo "## 2. hai cau dau (CREATE TABLE tags, CREATE INDEX) con khong?"
Q $DATABASE_URL "select to_regclass('public.tags') as bang_tags, to_regclass('public.idx_tags_name') as chi_muc"
Q $DATABASE_URL "select migration_name, (finished_at is not null) as xong, applied_steps_count, left(logs,70) as logs from _prisma_migrations order by started_at"
echo "## 3. deploy lan hai"
P migrate deploy
P migrate status
echo "## 4. resolve --rolled-back vao migration KHONG hong"
P migrate resolve --rolled-back 0_init
echo "## 5. do troi dat (co shadow): lich su migrations → DB that"
P migrate diff --from-migrations ./prisma/migrations --to-url "$DATABASE_URL" --shadow-database-url "$BASE/shadow2" --script
echo "## 6. cach dung: DB CHUA co cau nao cua migration hong ⇒ --rolled-back la DUNG, roi va FILE (chua tung ap o dau)"
P migrate resolve --rolled-back 20260710120000_add_tags
sed -i 's/"khong_ton_tai"/"tags"/' $NV/migration.sql
P migrate deploy
Q $DATABASE_URL "select to_regclass('public.tags') as bang_tags"
P migrate status
