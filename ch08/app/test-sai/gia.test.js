import { test } from 'node:test';
import assert from 'node:assert/strict';

const giaSauGiam = (gia, phanTram) => Math.round(gia * (1 - phanTram / 100));

test('giam 15% cua 199000', () => {
  // Ky vong viet sai: nguoi viet tinh nham 169000 (dung la 169150).
  assert.equal(giaSauGiam(199000, 15), 169000);
});
