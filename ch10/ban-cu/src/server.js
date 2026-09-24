// Mini API mo phong backend cuongthai.com: moi file trong routes/ la mot router.
// "Build" = cai gi nam trong thu muc routes/ LUC dung anh. Khong co file = khong co route.
const http = require('http');
const fs = require('fs');
const path = require('path');
const routes = {};
for (const f of fs.readdirSync(path.join(__dirname, 'routes'))) {
  const r = require('./routes/' + f);
  routes[r.path] = r;
}
console.log('mounted:', Object.keys(routes).sort().join(' '));
http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  const send = (code, body) => { res.writeHead(code, { 'content-type': 'application/json' }); res.end(JSON.stringify(body)); };
  if (url === '/health') return send(200, { ok: true });
  const r = routes[url.replace(/^\/api\/v1\//, '')];
  if (!r) return send(404, { success: false, message: `Route ${req.method} ${url} not found` });
  if (r.auth && !req.headers.authorization) return send(401, { success: false, message: 'No authentication token provided', code: 'UNAUTHORIZED' });
  return send(200, r.handle());
}).listen(3001, () => console.log('listening 3001'));
