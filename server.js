const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = '3000';

fs.readFile('./index.html', (err, html) => {
  // handle error
  if (err) {
    console.log(err);
    return;
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(port, host, () =>
    console.log(`Server running on port ${port}`)
  );
});
