// @ts-check
import { taoPool, taoBang } from './db.js';
import { taoApp } from './app.js';

const cong = Number(process.env.PORT || 3000);
const pool = taoPool();

// Postgres co the len cham hon app vai giay: thu lai toi 10 lan.
for (let lan = 1; ; lan++) {
  try {
    await taoBang(pool);
    break;
  } catch (e) {
    if (lan >= 10) throw e;
    console.log(`cho Postgres (lan ${lan}): ${/** @type {Error} */ (e).message}`);
    await new Promise((r) => setTimeout(r, 1000));
  }
}

taoApp(pool).listen(cong, () => {
  console.log(`phong-kham ${process.env.APP_VERSION || 'dev'} nghe cong ${cong}`);
});
