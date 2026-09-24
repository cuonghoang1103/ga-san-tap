-- Ban "SUA" (commit b2aee39e, 28/06 21:12 UTC): IF NOT EXISTS + khoi DO cho rang buoc
CREATE TABLE IF NOT EXISTS "note_subject_shares" (
    "id" SERIAL PRIMARY KEY,
    "subject_id" INTEGER NOT NULL,
    "recipient_id" INTEGER NOT NULL
);
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'uk_note_subject_share') THEN
        ALTER TABLE "note_subject_shares" ADD CONSTRAINT "uk_note_subject_share" UNIQUE("subject_id", "recipient_id");
    END IF;
END $$;
CREATE INDEX IF NOT EXISTS "idx_note_subject_share_recipient" ON "note_subject_shares"("recipient_id");
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_note_subject_share_recipient') THEN
        ALTER TABLE "note_subject_shares" ADD CONSTRAINT "fk_note_subject_share_recipient"
            FOREIGN KEY ("recipient_id") REFERENCES "users"("id") ON DELETE CASCADE;
    END IF;
END $$;
