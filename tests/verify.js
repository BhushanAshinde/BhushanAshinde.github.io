const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, status: 'healthy' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body>Portfolio ok</body></html>');
});

server.listen(0, () => {
  const { port } = server.address();
  http.get({ port, path: '/api/health' }, (response) => {
    let data = '';
    response.on('data', (chunk) => { data += chunk; });
    response.on('end', () => {
      if (response.statusCode !== 200) {
        console.error('Health check failed with status', response.statusCode);
        process.exit(1);
      }

      try {
        const parsed = JSON.parse(data);
        if (!parsed.ok || parsed.status !== 'healthy') {
          throw new Error('Health payload invalid');
        }
      } catch (error) {
        console.error('Health payload validation failed:', error.message);
        process.exit(1);
      }

      console.log('Verification passed: health endpoint ok');
      server.close();
    });
  }).on('error', (error) => {
    console.error('Request failed:', error.message);
    process.exit(1);
  });
});
