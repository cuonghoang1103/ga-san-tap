// Test CHAP CHON (flaky): khong await, doan rang 50 ms la "du lau". Dung khoang mot nua so lan.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { guiNhacLich } from './nhac-lich.js';

test('nhac lich duoc gui (ban chap chon)', async () => {
  const tt = { daGui: false };
  guiNhacLich(tt);                                  // quen await
  await new Promise((r) => setTimeout(r, 50));      // "cho 50 ms chac du"
  assert.equal(tt.daGui, true);
});
