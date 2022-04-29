import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DATA_ARR = [
  {
    title: "Car Insurance",
    price: "249.25",
    date: new Date(),
    id: "25468484654",
  },
  {
    title: "Grocery",
    price: "2000",
    date: new Date(2022, 11, 17),
    id: "454545452121",
  },
  {
    title: "CarWash",
    price: "20",
    date: new Date(2019, 5, 17),
    id: "2589345154",
  },
  {
    title: "Restaurant",
    price: "100",
    date: new Date(2021, 4, 11),
    id: "45454789347",
  },
  {
    title: "Dentist",
    price: "3000",
    date: new Date(2022, 6, 11),
    id: "45454789347",
  },
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
