// "frontend" gia: MODE=song tra 200, MODE=loi500 tra 500 (trang vo), MODE=api them route /api/v1/gifs 401
const mode = process.env.MODE || 'song';
require('http').createServer((req, res) => {
  if (mode === 'loi500') { res.writeHead(500); return res.end('Internal Server Error'); }
  if (req.url.startsWith('/api/v1/gifs')) { res.writeHead(401); return res.end('{"code":"UNAUTHORIZED"}'); }
  if (req.url.startsWith('/api/v1/')) { res.writeHead(404); return res.end('{"message":"not found"}'); }
  res.writeHead(200); res.end('<html>ok</html>');
}).listen(3000, () => console.log('web', mode, 'listening 3000'));
