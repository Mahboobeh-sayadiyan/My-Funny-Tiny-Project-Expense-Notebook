import "./ExpensesList.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const expenses = props.items;
  const [filterData, setfilterData] = useState("2022");
  const saveFilterDataHandler = (newFilterData) => {
    setfilterData(newFilterData);
  };
  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filterData;
  });

  const removeExpenseYearHandler = () => {
    props.onRemoveExpense(filterData);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterData}
        onSaveFilterData={saveFilterDataHandler}
        onRemoveExpenses={removeExpenseYearHandler}
      />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
