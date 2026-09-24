import { test } from 'node:test';
import assert from 'node:assert/strict';
import { moiHon } from '../src/phien-ban.js';
test('0.5.40 moi hon 0.5.39', () => assert.equal(moiHon('0.5.40', '0.5.39'), true));
test('bang nhau', () => assert.equal(moiHon('1.0.0', '1.0.0'), false));
