import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   titleClick: "",
  //   amountClick: "",
  //   dateClick: "",
  // });

  const titleClick = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   titleClick: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, titleClick: event.target.value };
    // });
  };
  const amountClick = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amountClick: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, amountClick: event.target.value };
    // });
  };
  const dateClick = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   dateClick: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, dateClick: event.target.value };
    // });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleClick} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountClick} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateClick}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Items</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
