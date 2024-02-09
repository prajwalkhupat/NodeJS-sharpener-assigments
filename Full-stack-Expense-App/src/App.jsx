import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = async () => {
    const newExpense = {
      amount: expenseAmount,
      description: expenseDescription,
      category: expenseCategory,
    };

    try {
      // Make a POST request to the server to add an expense
      await axios.post("http://localhost:5000/addExpense", newExpense);

      // Fetch updated expenses after adding
      fetchExpenses();
    } catch (error) {
      console.error("Error adding expense:", error);
    }

    setExpenseAmount("");
    setExpenseDescription("");
    setExpenseCategory("");
  };

  const fetchExpenses = async () => {
    try {
      // Make a GET request to the server to get all expenses
      const response = await axios.get("http://localhost:5000/getExpenses");
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    // Fetch expenses when the component mounts
    fetchExpenses();
  }, []);
  const handleDeleteExpense = async (id) => {
    try {
      // Make a DELETE request to the server to delete an expense by ID
      await axios.delete(`http://localhost:5000/deleteExpense/${id}`);

      // Fetch updated expenses after deleting
      fetchExpenses();
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md p-8 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h2 className="text-2xl font-semibold mb-4">Expense Tracker</h2>

        <div className="mb-4">
          <label
            htmlFor="expense-amount"
            className="block text-sm font-medium text-gray-600"
          >
            Choose Expense Amount:
          </label>
          <input
            type="number"
            id="expense-amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="expense-description"
            className="block text-sm font-medium text-gray-600"
          >
            Choose Description:
          </label>
          <input
            type="text"
            id="expense-description"
            value={expenseDescription}
            onChange={(e) => setExpenseDescription(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="expense-category"
            className="block text-sm font-medium text-gray-600"
          >
            Choose a Category:
          </label>
          <select
            id="expense-category"
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="Movie">Movie</option>
            <option value="Food">Food</option>
            <option value="Grocery">Grocery</option>
            <option value="Travelling">Travelling</option>
          </select>
        </div>

        <button
          id="add-expense"
          onClick={handleAddExpense}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Expense
        </button>

        <div className="mt-8" id="expense-list">
          {/* Expense items will be dynamically added here */}
          {expenses.map((expense) => (
            <div key={expense.id} className="border-t pt-4 mt-4">
              <p className="text-lg font-semibold">Amount: {expense.amount}</p>
              <p className="text-gray-600">
                Description: {expense.description}
              </p>
              <p className="text-gray-600">Category: {expense.category}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                onClick={() => handleDeleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
