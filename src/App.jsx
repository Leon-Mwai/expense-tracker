import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const handleAddExpense = (expense) => {
    const updated = [...expenses, expense];
    setExpenses(updated);
    setFiltered(updated);
  };

  const handleDeleteExpense = (id) => {
    const updated = expenses.filter((expense) => expense.id !== id);
    setExpenses(updated);
    setFiltered(updated);
  };

  const handleSearch = (query) => {
    const filteredData = expenses.filter((exp) =>
      exp.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredData);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar onSearch={handleSearch} />
      <ExpenseTable expenses={filtered} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;

