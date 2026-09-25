// @ts-check
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { kiemLich } from './lich.js';

const thuMuc = path.dirname(fileURLToPath(import.meta.url));

/**
 * Dung app Express. Nhan pool tu ben ngoai de test va server dung chung.
 * @param {import('pg').Pool} pool
 */
export function taoApp(pool) {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(thuMuc, '..', 'public')));

  app.get('/healthz', async (_req, res) => {
    try {
      await pool.query('SELECT 1');
      res.json({ ok: true, phienBan: process.env.APP_VERSION || 'dev', db: 'ok' });
    } catch (e) {
      res.status(503).json({ ok: false, db: String(e) });
    }
  });

  app.get('/api/lich', async (req, res) => {
    const bacSi = typeof req.query.bacSi === 'string' ? req.query.bacSi : null;
    const { rows } = await pool.query(
      'SELECT id, bac_si AS "bacSi", benh_nhan AS "benhNhan", bat_dau AS "batDau" FROM lich_hen' +
        (bacSi ? ' WHERE bac_si = $1' : '') + ' ORDER BY bat_dau',
      bacSi ? [bacSi] : [],
    );
    res.json(rows);
  });

  // v1.1.0: danh sach bac si dang co lich, kem so lich cua moi nguoi
  app.get('/api/bac-si', async (_req, res) => {
    const { rows } = await pool.query(
      'SELECT bac_si AS "bacSi", count(*)::int AS "soLich" FROM lich_hen GROUP BY bac_si ORDER BY bac_si',
    );
    res.json(rows);
  });

  app.post('/api/lich', async (req, res) => {
    const loi = kiemLich(req.body ?? {});
    if (loi.length) return res.status(400).json({ loi });
    const { bacSi, benhNhan, batDau } = req.body;
    try {
      const { rows } = await pool.query(
        'INSERT INTO lich_hen (bac_si, benh_nhan, bat_dau) VALUES ($1, $2, $3) RETURNING id',
        [bacSi, benhNhan, batDau],
      );
      return res.status(201).json({ id: rows[0].id });
    } catch (e) {
      // 23505 = unique_violation: bac si da co lich o khung gio nay
      if (/** @type {any} */ (e).code === '23505') return res.status(409).json({ loi: ['khung gio da co nguoi dat'] });
      throw e;
    }
  });

  return app;
}
