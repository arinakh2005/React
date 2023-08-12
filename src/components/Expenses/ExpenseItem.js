import './ExpenseItem.css';
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle('Updated');
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.expense.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2>{props.expense.title}</h2>
          <div className='expense-item__price'>${props.expense.amount}</div>
        </div>
        <button onClick={clickHandler}>{title}</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;