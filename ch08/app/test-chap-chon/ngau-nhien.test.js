import { test } from 'node:test';
import assert from 'node:assert/strict';

// Mo phong mot cuoc dua: 20% so lan "ket qua ve cham hon lenh doc".
test('doc sau khi ghi (dua 20%)', () => {
  const thua = Math.random() < 0.2;
  assert.equal(thua ? 'cu' : 'moi', 'moi');
});

// Phu thuoc dong ho that: dat hen 50 ms, doi hoi xong trong 53 ms.
test('hen gio 50ms xong duoi 53ms', async () => {
  const t0 = performance.now();
  await new Promise((r) => setTimeout(r, 50));
  const ms = performance.now() - t0;
  assert.ok(ms < 53, `mat ${ms.toFixed(1)} ms`);
});
