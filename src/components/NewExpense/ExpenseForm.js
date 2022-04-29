import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  let userInput;
  const [stateObj, setStateObj] = useState({ title: "", price: "", date: "" });

  const titleChangeHandler = (event) => {
    setStateObj({ ...stateObj, title: event.target.value });
  };
  const priceChangeHandler = (event) => {
    setStateObj({ ...stateObj, price: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setStateObj({ ...stateObj, date: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    userInput = {
      title: stateObj.title,
      price: +stateObj.price,
      date: new Date(stateObj.date),
    };
    /// pass data up
    props.onSaveExpenseData(userInput);
    //reset all input //two-way binding
    // event.target.reset();

    setStateObj({ title: "", price: "", date: "" });
    props.onCancleSubmit();
  };
  const cancleHandler = (event) => {
    event.preventDefault();
    props.onCancleSubmit();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="fname">Title</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={stateObj.title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="lname">Price</label>
          <input
            type="number"
            id="lname"
            name="lname"
            value={stateObj.price}
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="lname">Date</label>
          <input
            type="date"
            id="lname"
            name="lname"
            min="2019-01-01"
            max="2022-12-31"
            value={stateObj.date}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancleHandler}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
