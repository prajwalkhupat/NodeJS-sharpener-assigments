const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database'); // Adjust the path based on your project structure

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submitForm', (req, res) => {
  const { username, phone, email } = req.body;

  const sql = 'INSERT INTO users (username, phone, email) VALUES (?, ?, ?)';
  db.query(sql, [username, phone, email], (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted into MySQL successfully');
      res.status(200).send('Form submitted successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
