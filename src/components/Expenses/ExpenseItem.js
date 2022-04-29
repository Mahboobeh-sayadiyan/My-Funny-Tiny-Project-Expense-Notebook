import "./ExpenseItem.css";
import DateExpens from "./DateExpens";
import Card from "../UI/Card";
function ExpenseItem(props) {
  //const [title, setTitle] = useState(props.title);
  // const onClickFunct = () => {
  //   // setTitle("New title");
  //   console.log("clicked");
  // };
  return (
    <Card className="expense-item">
      <DateExpens date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      {/* <button onClick={onClickFunct}></button> */}
    </Card>
  );
}
export default ExpenseItem;
