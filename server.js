import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 4321;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

function send404(res) {
  const notFound = path.join(DIST, '404.html');
  res.writeHead(404, { 'Content-Type': 'text/html' });
  fs.createReadStream(notFound)
    .on('error', () => res.end('Not Found'))
    .pipe(res);
}

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);

  // Resolve the target file and guard against path traversal outside DIST
  let filePath = path.normalize(path.join(DIST, url));
  if (!filePath.startsWith(DIST)) {
    send404(res);
    return;
  }

  // Directory or extensionless URL -> serve its index.html
  if (!path.extname(url)) {
    filePath = path.join(filePath, 'index.html');
  }

  // Async stat so the event loop is never blocked
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      send404(res);
      return;
    }

    const ext = path.extname(filePath);
    const mime = MIME[ext] || 'application/octet-stream';
    const cacheControl = ext === '.html'
      ? 'public, max-age=0, must-revalidate'
      : 'public, max-age=31536000, immutable';

    res.writeHead(200, {
      'Content-Type': mime,
      'Content-Length': stat.size,
      'Cache-Control': cacheControl,
    });

    // Stream the file instead of buffering it fully in memory
    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
