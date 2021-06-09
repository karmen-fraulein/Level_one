import { useState } from 'react';
import Card from "../UI/Cards";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import "./ExpenseTitle.css";

const ExpenseTitle = (props) => {
  const [filterYear, setFilterYear] = useState('2020');
  const filterChangeHandler = selectedYear => {

    setFilterYear(selectedYear);
  };


  //წლების მიხედვით ფილტრავს 
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;  //ადარებს, თუ დეითის ცვლადში გვაქვს წელი,მაშინ აბრუნებს შესაბამისს,თუ არადა ფოლსს
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default ExpenseTitle;
