import { test } from 'node:test';
import assert from 'node:assert/strict';

// Trang thai CHUNG cap module — nguon phu thuoc thu tu.
const gioHang = [];

test('them mon vao gio', () => {
  gioHang.push('ca-phe');
  assert.equal(gioHang.length, 1);
});

test('gio moi phai rong', () => {
  assert.equal(gioHang.length, 0);
});
