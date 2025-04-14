import React from "react";

function ExpenseTable({ expenses, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount (Ksh)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="3">No expenses yet!</td>
          </tr>
        ) : (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.amount.toFixed(2)}</td>
              <td>
                <button onClick={() => onDelete(expense.id)}>❌ Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
