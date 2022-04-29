import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
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
  const removeHandler = () => {
    props.onRemoveExpense();
  };

  return (
    <Card className="new-expense">
      {showForm ? (
        <ExpenseForm
          onCancleSubmit={hideFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <div>
          <button onClick={showFormHandler}>Add New Expense</button>
          <button onClick={removeHandler}>Remove All Expenses</button>
        </div>
      )}
    </Card>
  );
};
export default NewExpense;
