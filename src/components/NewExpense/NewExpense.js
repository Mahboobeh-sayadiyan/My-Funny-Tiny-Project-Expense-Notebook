import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import react, { useState } from "react";
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (expenseData) => {
    const newExpense = { ...expenseData, id: Math.random().toString() };
    props.onShowNewExpanse(newExpense);
  };
  const showFormHandler = () => {
    setShowForm(true);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <Card className="new-expense">
      {showForm ? (
        <ExpenseForm
          onCancleSubmit={hideFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </Card>
  );
};
export default NewExpense;
