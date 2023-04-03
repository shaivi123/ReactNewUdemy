import React, {useState} from "react";
import "./App.css";
import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "Mobile",
    amount: 250,
    date: new Date(2022, 6, 11),
  },
  {
    id: "e5",
    title: "Mac Book",
    amount: 950,
    date: new Date(2019, 8, 12),
  },
];

function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(Expenses, { item: expense })
  // );
  const addExpenseHandler = expense => {
  //  setExpenses([expense, ...expenses]);      // or this type also we can do
        setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
