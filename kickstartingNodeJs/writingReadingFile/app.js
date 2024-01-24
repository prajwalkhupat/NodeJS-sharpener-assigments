const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Read messages from file
function readMessagesFromFile() {
  try {
    const data = fs.readFileSync('messages.txt', 'utf8');
    return data.split('\n').filter(message => message.trim() !== '');
  } catch (err) {
    console.error('Error reading messages from file:', err);
    return [];
  }
}

// Write a new message to file
function writeMessageToFile(message) {
  try {
    fs.appendFileSync('messages.txt', message + '\n');
  } catch (err) {
    console.error('Error writing message to file:', err);
  }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const messages = readMessagesFromFile();
  res.send(`
    <h1>Messages</h1>
    <div id="messageList">${messages.map(message => `<p>${message}</p>`).join('')}</div>
    <form id="messageForm" action="/" method="post">
      <label for="message">Add Message:</label>
      <input type="text" id="message" name="message" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  const newMessage = req.body.message;
  writeMessageToFile(newMessage);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});