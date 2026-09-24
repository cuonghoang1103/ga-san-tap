import { test } from 'node:test';
import assert from 'node:assert/strict';
import { nhan } from '../src/hien-thi.js';
test('het cho', () => assert.equal(nhan(0), 'Het cho'));
test('con cho', () => assert.equal(nhan(2), 'Con 2 cho'));
