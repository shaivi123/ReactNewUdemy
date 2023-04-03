import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpensiItem.css";
import Card from "../UI/Card.js";

const ExpensiItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("update!");
    console.log(title);
  };

  return (
    <li>
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>click here</button>
    </Card>
    </li>
  );
};

export default ExpensiItem;
