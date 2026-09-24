import { test } from 'node:test';
import assert from 'node:assert/strict';
import { kiemLich } from '../src/lich.js';

const hopLe = { bacSi: 'BS Lan', benhNhan: 'Cuong', batDau: '2026-10-01T09:30:00Z' };

test('lich hop le thi khong co loi', () => {
  assert.deepEqual(kiemLich(hopLe), []);
});

test('thieu truong thi bao dung truong do', () => {
  assert.deepEqual(kiemLich({ ...hopLe, bacSi: '' }), ['thieu bacSi']);
  assert.deepEqual(kiemLich({ bacSi: 'x', benhNhan: 'y' }), ['thieu batDau']);
});

test('phut le bi tu choi', () => {
  assert.match(kiemLich({ ...hopLe, batDau: '2026-10-01T09:15:00Z' })[0], /phut 00 hoac 30/);
});

test('ngoai gio lam viec bi tu choi', () => {
  assert.match(kiemLich({ ...hopLe, batDau: '2026-10-01T17:00:00Z' })[0], /ngoai gio/);
  assert.match(kiemLich({ ...hopLe, batDau: '2026-10-01T07:30:00Z' })[0], /ngoai gio/);
});
