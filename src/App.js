import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
// const DATA_ARR = [
//   {
//     title: "Car Insurance",
//     price: "249.25",
//     date: new Date(),
//     id: "25468484654",
//   },
//   {
//     title: "Grocery",
//     price: "2000",
//     date: new Date(2022, 11, 17),
//     id: "454545452121",
//   },
//   {
//     title: "CarWash",
//     price: "20",
//     date: new Date(2019, 5, 17),
//     id: "2589345154",
//   },
//   {
//     title: "Restaurant",
//     price: "100",
//     date: new Date(2021, 4, 11),
//     id: "45454789347",
//   },
//   {
//     title: "Dentist",
//     price: "3000",
//     date: new Date(2022, 6, 11),
//     id: "45454789347",
//   },
// ];
const App = () => {
  const storedData = JSON.parse(localStorage.getItem("Expenses"));
  const [expenses, setExpenses] = useState(storedData ? storedData : []);
  const showNewExpanseHandler = (newExpenseData) => {
    setExpenses((prevexpenses) => {
      const newExpense = [newExpenseData, ...prevexpenses];
      localStorage.setItem("Expenses", JSON.stringify(newExpense));
      return newExpense;
    });
  };
  const removeExpanseHandler = () => {
    localStorage.removeItem("Expenses");
    setExpenses([]);
  };
  const removeExpanseYearHandler = (year) => {
    const editedExpenses = expenses.filter(
      (expense) => expense.date.getFullYear().toString() !== year
    );

    localStorage.removeItem("Expenses");
    localStorage.setItem("Expenses", JSON.stringify(editedExpenses));
    setExpenses(editedExpenses);
  };
  return (
    <div>
      <NewExpense
        onRemoveExpense={removeExpanseHandler}
        onShowNewExpanse={showNewExpanseHandler}
      />
      <Expenses onRemoveExpense={removeExpanseYearHandler} items={expenses} />
    </div>
  );
};

export default App;
