const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log('Request logged:', req.method, req.url);
  next();
});

// Middleware to parse JSON and url-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to show the form
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="post">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" required>
      
      <label for="productSize">Product Size:</label>
      <input type="text" id="productSize" name="productSize" required>

      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route to handle form submission
app.post('/add-product', (req, res) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize;

  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);

  res.send('Product added successfully!');
});

// Middleware for handling other routes
app.use((req, res, next) => {
  console.log('Default middleware');
  res.send('<h1>Hello from Express.js</h1>');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
