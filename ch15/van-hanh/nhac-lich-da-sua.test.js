// Ban DA SUA: cho dung cai promise, khong doan thoi gian.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { guiNhacLich } from './nhac-lich.js';

test('nhac lich duoc gui (ban da sua)', async () => {
  const tt = { daGui: false };
  await guiNhacLich(tt);
  assert.equal(tt.daGui, true);
});
