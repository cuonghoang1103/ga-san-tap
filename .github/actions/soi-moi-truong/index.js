// Khong dung thu vien nao: doc tham so tu bien moi truong INPUT_*, ghi output vao tep GITHUB_OUTPUT.
const fs = require('fs');
const env = process.env;
const ten = (re) => Object.keys(env).filter((k) => re.test(k)).sort();
console.log('node chay action :', process.version, '|', process.execPath);
console.log('bien INPUT_*     :', ten(/^INPUT_/).map((k) => `${k}=${env[k]}`).join('  '));
console.log('co GITHUB_TOKEN trong env?', 'GITHUB_TOKEN' in env);
console.log('ten bien co chu TOKEN:', ten(/TOKEN/).join(', ') || '(khong co)');
console.log('ten bien ACTIONS_*   :', ten(/^ACTIONS_/).join(', '));
console.log('thu muc lam viec     :', process.cwd());
console.log('GITHUB_ACTION_PATH   :', env.GITHUB_ACTION_PATH || '(khong dat)');
let cfg = '';
try { cfg = fs.readFileSync('.git/config', 'utf8'); } catch { cfg = '(khong doc duoc)'; }
console.log('.git/config co extraheader?', /extraheader/.test(cfg), '| co includeIf?', /includeIf/.test(cfg));
fs.appendFileSync(env.GITHUB_OUTPUT, `da-nhan=${env['INPUT_LOI-NHAN']}\n`);
