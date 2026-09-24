// ch00/app.js — sửa: cấu hình MẶC ĐỊNH nằm trong kho; tệp .local chỉ để GHI ĐÈ trên máy riêng
const fs = require('node:fs');
const path = require('node:path');
const doc = (f) => JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8'));
const local = path.join(__dirname, 'config.local.json');
const cfg = { ...doc('config.example.json'), ...(fs.existsSync(local) ? doc('config.local.json') : {}) };
console.log(`Xin chao tu ${cfg.ten} — cong ${cfg.cong}`);
