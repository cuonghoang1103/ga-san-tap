import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cong, nhanDoi } from '../tinh.js';

test('cong 1 + 1', () => {
  assert.equal(cong(1, 1), 2);
});

test('nhanDoi [1,2,3]', () => {
  assert.deepEqual(nhanDoi([1, 2, 3]), [2, 4, 6]);
});
