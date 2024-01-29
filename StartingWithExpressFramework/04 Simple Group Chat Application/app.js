const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));

// Middleware to log requests
app.use((req, res, next) => {
  console.log("Request logged:", req.method, req.url);
  next();
});

// Route to show login form
app.get("/login", (req, res) => {
  res.send(`
    <form action="/login" method="post">
      <label for="username">Enter your username:</label>
      <input type="text" id="username" name="username" required>
      <button type="submit">Login</button>
    </form>
  `);
});

// Route to handle login form submission
app.post("/login", (req, res) => {
  const username = req.body.username;

  // Store username in local storage
  res.cookie("username", username);

  // Redirect to the chat page
  res.redirect("/");
});

// Route to show chat form
app.get("/", (req, res) => {
  const username = req.cookies.username;

  if (!username) {
    res.redirect("/login");
    return;
  }

  // Route to handle message submission
  if (req.method === "GET") {
    // Handle GET request (show a message form, for example)
    res.send(`
      <h1>Welcome to the Group Chat, ${username}!</h1>
      <form action="/send-message" method="post">
        <label for="message">Type your message:</label>
        <input type="text" id="message" name="message" required>
        <button type="submit">Send</button>
      </form>
    `);
  } else if (req.method === "POST") {
    // Handle POST request (process the submitted message)
    const message = req.body.message;

    // Store message in a file
    fs.appendFileSync("messages.txt", `${username}: ${message}\n`);

    res.send("Message sent successfully!");
  }
});

// Route to display chat messages
app.get("/chat", (req, res) => {
  const messages = fs.readFileSync("messages.txt", "utf8");
  res.send(`<h1>Chat History</h1><pre>${messages}</pre>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
