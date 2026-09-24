// Logic THUẦN — không import @actions/*, nên test được bằng node --test trên máy.
import fs from 'node:fs';
import path from 'node:path';

const BO_QUA = new Set(['.git', 'node_modules']);

export function demTep(goc) {
  const dem = {};
  let tong = 0;
  const di = (thuMuc) => {
    for (const e of fs.readdirSync(thuMuc, { withFileTypes: true })) {
      if (BO_QUA.has(e.name)) continue;
      const p = path.join(thuMuc, e.name);
      if (e.isDirectory()) di(p);
      else {
        const duoi = path.extname(e.name) || '(khong duoi)';
        dem[duoi] = (dem[duoi] || 0) + 1;
        tong++;
      }
    }
  };
  di(goc);
  const xep = Object.entries(dem).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  return { tong, xep, nhieuNhat: xep[0]?.[0] ?? '' };
}
