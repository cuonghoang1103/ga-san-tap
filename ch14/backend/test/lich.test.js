import { test } from 'node:test';
import assert from 'node:assert/strict';
import { choTrong, hetCho } from '../src/lich.js';
test('con 3 cho', () => assert.equal(choTrong(10, 7), 3));
test('khong am', () => assert.equal(choTrong(5, 9), 0));
test('het cho', () => assert.equal(hetCho(4, 4), true));
import { tiLeDay } from '../src/lich.js';
test('ti le day', () => assert.equal(tiLeDay(10, 5), 0.5));
