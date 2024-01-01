const http = require('http');

// Define host and port
const host = '165.22.192.121';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Redirect to https://sasb.co.za
    res.writeHead(302, {
      'Location': 'https://sasb.co.za'
    });
    res.end();
  } else {
    // Handle other paths or actions
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

// Start the server
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
