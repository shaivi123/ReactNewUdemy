import React,{useState} from "react";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpensesList.js";
import ExpenseChart from "./ExpenseChart.js";

const Expenses = (props) => {
  const[filterYear, setFilterYear] = useState('2020');
  const filterChangeHandle = (selectYear) =>{
       setFilterYear(selectYear);
  } 
  const filterChange = props.item.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  });
  
  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChange={filterChangeHandle}/>
      <ExpenseChart expenses={filterChange}/>
      <ExpenseList item={filterChange} />
    </Card>
    </div>
  );
};

export default Expenses;
