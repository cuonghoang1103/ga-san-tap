// ch00/app.js — "máy tôi chạy được": đọc cấu hình từ một tệp KHÔNG được commit
const fs = require('node:fs');
const path = require('node:path');
const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.local.json'), 'utf8'));
console.log(`Xin chao tu ${cfg.ten} — cong ${cfg.cong}`);
