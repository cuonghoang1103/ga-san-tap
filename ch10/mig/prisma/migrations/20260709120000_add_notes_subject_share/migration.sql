-- Ban GOC (commit 6ffffb68, 28/06 20:49 UTC): khong IF NOT EXISTS
CREATE TABLE "note_subject_shares" (
    "id" SERIAL PRIMARY KEY,
    "subject_id" INTEGER NOT NULL,
    "recipient_id" INTEGER NOT NULL,
    UNIQUE("subject_id", "recipient_id")
);
CREATE INDEX "idx_note_subject_share_recipient" ON "note_subject_shares"("recipient_id");
ALTER TABLE "note_subject_shares" ADD CONSTRAINT "fk_note_subject_share_recipient"
    FOREIGN KEY ("recipient_id") REFERENCES "users"("id") ON DELETE CASCADE;
