// PR #10: them /api/bac-si — test tich hop dem lich theo bac si
// Test tich hop: chay voi Postgres THAT (service container trong CI).
// Khong co DATABASE_URL (vd tren may khong bat Postgres) thi BO QUA — nhung CI luon dat bien nay.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { taoPool, taoBang } from '../src/db.js';
import { taoApp } from '../src/app.js';

const coDb = Boolean(process.env.DATABASE_URL);
/** @type {import('pg').Pool} */ let pool;
/** @type {import('node:http').Server} */ let server;
let goc = '';

before(async () => {
  if (!coDb) return;
  pool = taoPool();
  await taoBang(pool);
  await pool.query('TRUNCATE lich_hen RESTART IDENTITY');
  server = taoApp(pool).listen(0);
  goc = `http://127.0.0.1:${/** @type {any} */ (server.address()).port}`;
});
after(async () => {
  server?.close();
  await pool?.end();
});

const dat = (body) => fetch(`${goc}/api/lich`, {
  method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body),
});

test('healthz noi chuyen duoc voi Postgres', { skip: !coDb }, async () => {
  const r = await fetch(`${goc}/healthz`);
  assert.equal(r.status, 200);
  assert.equal((await r.json()).db, 'ok');
});

test('dat lich roi doc lai', { skip: !coDb }, async () => {
  const r = await dat({ bacSi: 'BS Lan', benhNhan: 'Cuong', batDau: '2026-10-01T09:30:00Z' });
  assert.equal(r.status, 201);
  const ds = await (await fetch(`${goc}/api/lich?bacSi=BS%20Lan`)).json();
  assert.equal(ds.length, 1);
  assert.equal(ds[0].benhNhan, 'Cuong');
});

test('trung khung gio cua cung bac si thi 409', { skip: !coDb }, async () => {
  const r = await dat({ bacSi: 'BS Lan', benhNhan: 'Minh', batDau: '2026-10-01T09:30:00Z' });
  assert.equal(r.status, 409);
});

test('yeu cau sai thi 400 kem danh sach loi', { skip: !coDb }, async () => {
  const r = await dat({ bacSi: 'BS Lan', batDau: '2026-10-01T09:10:00Z' });
  assert.equal(r.status, 400);
  assert.equal((await r.json()).loi.length, 2);
});

test('danh sach bac si dem dung so lich', { skip: !coDb }, async () => {
  await dat({ bacSi: 'BS Hoa', benhNhan: 'An', batDau: '2026-10-01T10:00:00Z' });
  const ds = await (await fetch(`${goc}/api/bac-si`)).json();
  assert.deepEqual(ds, [{ bacSi: 'BS Hoa', soLich: 1 }, { bacSi: 'BS Lan', soLich: 1 }]);
});
