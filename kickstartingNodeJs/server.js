const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/home') {
    res.end('Welcome home');
  } else if (parsedUrl.pathname === '/about') {
    res.end('Welcome to About Us page');
  } else if (parsedUrl.pathname === '/node') {
    res.end('Welcome to my Node.js project');
  } else {
    res.end('Invalid URL');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});