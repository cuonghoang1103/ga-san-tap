#!/usr/bin/env bash
# Dung lai 28/06/2026 20:59–21:28 UTC dung thu tu: hai workflow deploy cung chay tren MOT commit.
set -u; source ./chung.sh
export DATABASE_URL=$BASE/prod
SHARE=prisma/migrations/20260709120000_add_notes_subject_share
echo "## 0. prod dang o trang thai cu: chi co 0_init"
mv $SHARE /tmp/share && P migrate deploy >/dev/null && mv /tmp/share $SHARE && echo "  (da ap 0_init)"
echo "## 1. backend-vps.yml (21:07:03): db push --accept-data-loss"
P db push --accept-data-loss --skip-generate
echo "## 2. deploy-ghcr.yml (21:09:20): migrate deploy"
P migrate deploy
echo "## 3. commit sau (21:12): migrate deploy lan nua"
P migrate deploy
Q $DATABASE_URL "select migration_name, (finished_at is not null) as xong, (rolled_back_at is not null) as rolled_back, left(logs, 60) as logs from _prisma_migrations order by started_at"
echo "## 4. 'va' 684742b2 (21:21): resolve --rolled-back MOI migration, || true"
for d in prisma/migrations/*/; do P migrate resolve --rolled-back "$(basename "$d")" || true; done
echo "## 5. 'va' b2aee39e: sua migration thanh IF NOT EXISTS, deploy lai"
cp sua/idempotent.sql $SHARE/migration.sql
P migrate deploy
echo "## 6. prod bay gio co nhung chi muc/rang buoc nao tren note_subject_shares?"
Q $DATABASE_URL "select indexname from pg_indexes where tablename='note_subject_shares' order by 1"
Q $DATABASE_URL "select conname, contype from pg_constraint where conrelid='note_subject_shares'::regclass order by 1"
echo "## 7. mot moi truong MOI (may dev, staging, khoi phuc tu dau) chay cung thu muc migrations"
DATABASE_URL=$BASE/moi P migrate deploy >/dev/null
Q $BASE/moi "select indexname from pg_indexes where tablename='note_subject_shares' order by 1"
Q $BASE/moi "select conname, contype from pg_constraint where conrelid='note_subject_shares'::regclass order by 1"
echo "## 8. do troi dat — cac lenh migrate diff"
echo "### 8a. dung nguyen cau trong CLAUDE.md (--to-database-url, khong shadow)"
P migrate diff --from-migrations ./prisma/migrations --to-database-url "$DATABASE_URL" --script
echo "### 8b. --to-url, van khong shadow"
P migrate diff --from-migrations ./prisma/migrations --to-url "$DATABASE_URL" --script
echo "### 8c. co --shadow-database-url"
P migrate diff --from-migrations ./prisma/migrations --to-url "$DATABASE_URL" --shadow-database-url "$BASE/shadow" --script
echo "### 8d. schema.prisma → prod (prod lech gi so voi mo hinh?)"
P migrate diff --from-schema-datamodel prisma/schema.prisma --to-url "$DATABASE_URL" --script
echo "### 8e. schema.prisma → moi"
P migrate diff --from-schema-datamodel prisma/schema.prisma --to-url "$BASE/moi" --script
