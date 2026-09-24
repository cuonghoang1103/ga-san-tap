// "Lint" (dung chung cho ca ba goi) toi gian cho sân tập: cam console.log va 'var ' trong src/.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
const dir = process.argv[2] || 'src';
let loi = 0;
for (const f of readdirSync(dir)) {
  readFileSync(join(dir, f), 'utf8').split('\n').forEach((dong, i) => {
    if (/console\.log|\bvar\s/.test(dong)) { console.log(`::error file=${dir}/${f},line=${i + 1}::${dong.trim()}`); loi++; }
  });
}
console.log(`kiem-ma: ${loi} loi trong ${dir}`);
process.exit(loi ? 1 : 0);
