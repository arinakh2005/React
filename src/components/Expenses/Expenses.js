import './Expenses.css';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  // const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022');
  // let filterInfoText = '2019, 2021 & 2022';
  // if (filteredYear === '2019') {
  //   filterInfoText = '2020, 2021 & 2022';
  // } else if (filteredYear === '2021') {
  //   filterInfoText = '2019, 2020 & 2022';
  // } else {
  //   filterInfoText = '2019, 2020 & 2021';
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;