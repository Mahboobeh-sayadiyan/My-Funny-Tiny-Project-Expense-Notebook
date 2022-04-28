import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import react, { useState } from "react";
const DATA_ARR = [
  {
    title: "Car Insurance",
    price: "249.25",
    date: new Date(),
    id: "25468484654",
  },
  { title: "Grocery", price: "2000", date: new Date(), id: "454545452121" },
];
const App = () => {
  const [expenses, setExpenses] = useState(DATA_ARR);
  const showNewExpanseHandler = (newExpenseData) => {
    setExpenses((prevexpenses) => {
      const newArr = [newExpenseData, ...prevexpenses];
      console.log(newArr);
      return newArr;
    });
  };
  return (
    <div>
      <NewExpense onShowNewExpanse={showNewExpanseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
