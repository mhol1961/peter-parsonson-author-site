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

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0];

  // Try exact file first
  let filePath = path.join(DIST, url);

  // If directory or no extension, try index.html
  if (!path.extname(url)) {
    // Try /path/index.html
    const indexPath = path.join(DIST, url, 'index.html');
    if (fs.existsSync(indexPath)) {
      filePath = indexPath;
    } else if (url === '/') {
      filePath = path.join(DIST, 'index.html');
    }
  }

  try {
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      // 404
      const notFound = path.join(DIST, '404.html');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : 'Not Found');
      return;
    }

    const ext = path.extname(filePath);
    const mime = MIME[ext] || 'application/octet-stream';
    const data = fs.readFileSync(filePath);

    // Cache static assets aggressively
    const cacheControl = ext === '.html'
      ? 'public, max-age=0, must-revalidate'
      : 'public, max-age=31536000, immutable';

    res.writeHead(200, {
      'Content-Type': mime,
      'Cache-Control': cacheControl,
    });
    res.end(data);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
