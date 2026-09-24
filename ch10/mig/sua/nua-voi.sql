-- Migration hong o cau THU BA: hai cau dau hop le.
CREATE TABLE "tags" ("id" SERIAL PRIMARY KEY, "name" TEXT NOT NULL);
CREATE INDEX "idx_tags_name" ON "tags"("name");
ALTER TABLE "khong_ton_tai" ADD COLUMN "x" INTEGER;
