import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { demTep } from '../src/dem.js';

test('dem dung theo duoi, bo qua node_modules', () => {
  const goc = fs.mkdtempSync(path.join(os.tmpdir(), 'dem-'));
  for (const f of ['a.js', 'b.js', 'c.md', 'node_modules/x.js', 'sub/d.js', 'Makefile']) {
    fs.mkdirSync(path.dirname(path.join(goc, f)), { recursive: true });
    fs.writeFileSync(path.join(goc, f), '');
  }
  const kq = demTep(goc);
  assert.equal(kq.tong, 5);
  assert.equal(kq.nhieuNhat, '.js');
  assert.deepEqual(kq.xep[0], ['.js', 3]);
});
