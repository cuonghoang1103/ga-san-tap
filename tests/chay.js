// chay moi file *.test.js trong tests/, in xanh/HONG, thoat 1 neu co cai hong
const fs = require('fs'), path = require('path');
let hong = 0;
for (const f of fs.readdirSync(__dirname).filter((f) => f.endsWith('.test.js')).sort()) {
  const r = require(path.join(__dirname, f))();
  if (r === true) console.log(`  xanh: ${f}`); else { hong++; console.log(`  HONG: ${f} - ${r}`); }
}
console.log(hong ? `CI DO (${hong} hong)` : 'CI XANH');
process.exit(hong ? 1 : 0);
