CREATE TYPE "ContentType" AS ENUM ('VLOG', 'AFFILIATE', 'CODE', 'REVIEW', 'IDEA', 'OTHER');
CREATE TABLE "content_ideas" ("id" SERIAL PRIMARY KEY, "title" TEXT NOT NULL, "suggested_type" "ContentType");
