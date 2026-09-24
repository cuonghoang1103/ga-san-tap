// @ts-check
import pg from 'pg';

/** Tao pool ket noi. DATABASE_URL do CI (service container) hoac may chu dat. */
export function taoPool(url = process.env.DATABASE_URL) {
  if (!url) throw new Error('thieu DATABASE_URL');
  return new pg.Pool({ connectionString: url, max: 5 });
}

/**
 * Tao bang neu chua co. Idempotent: chay moi lan khoi dong.
 * @param {pg.Pool} pool
 */
export async function taoBang(pool) {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS lich_hen (
      id         SERIAL PRIMARY KEY,
      bac_si     TEXT        NOT NULL,
      benh_nhan  TEXT        NOT NULL,
      bat_dau    TIMESTAMPTZ NOT NULL,
      tao_luc    TIMESTAMPTZ NOT NULL DEFAULT now(),
      UNIQUE (bac_si, bat_dau)
    )`);
}
