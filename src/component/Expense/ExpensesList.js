import React from "react";
import ExpensiItem from "./ExpensiItem";
import './ExpensesList.css';

const ExpenseList= (props)=>{

    let expenseContent= <p>No expenses found..</p>;
   
    if(props.item.length === 0 ){
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }
      return <ul className="expenses-list">
        {props.item.map(expense => 
          <ExpensiItem 
          key={expense.key}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}/>)}

      </ul>
}


export default ExpenseList;