// Bộ test giả lập cho Chương 7: CPU THẬT (băm SHA-256 lặp), không sleep — để thời gian chạy dao động như test thật.
import { test } from 'node:test';
import assert from 'node:assert';
import { createHash } from 'node:crypto';
test('nhom 5: bam 2,4 trieu lan va doi chieu', () => {
  let h = 'nhom-5';
  for (let k = 0; k < 2400000; k++) h = createHash('sha256').update(h).digest('hex');
  assert.strictEqual(h.length, 64);
});
