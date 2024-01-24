const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Received a request!');
  console.log('My name is: Diganta Halder'); // Replace 'Your Name' with your actual name
  res.end('Hello from the server!');
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});