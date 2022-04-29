import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  const expenses = props.items;

  if (expenses.length === 0)
    return <p className="expenses-list__fallback">Found no Expenses</p>;
  else
    return (
      <ul className="expenses-list">
        {expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
          />
        ))}
      </ul>
    );
}
export default ExpensesList;
