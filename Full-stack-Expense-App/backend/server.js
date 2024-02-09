const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add this line
const database = require("./database");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to add an expense
app.post("/addExpense", async (req, res) => {
  try {
    const { amount, description, category } = req.body;

    // Insert data into the database
    await database.query(
      "INSERT INTO expenses (amount, description, category) VALUES (?, ?, ?)",
      [amount, description, category]
    );

    res.status(201).json({ message: "Expense added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to get all expenses
app.get("/getExpenses", async (req, res) => {
  try {
    // Retrieve all expenses from the database
    const expenses = await database.query("SELECT * FROM expenses");

    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Endpoint to delete an expense by ID
app.delete("/deleteExpense/:id", async (req, res) => {
  try {
    const expenseId = req.params.id;

    // Delete the expense from the database by ID
    await database.query("DELETE FROM expenses WHERE id = ?", [expenseId]);

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
