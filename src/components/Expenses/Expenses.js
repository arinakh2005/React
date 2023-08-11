import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.items[0]}></ExpenseItem>
      <ExpenseItem expense={props.items[1]}></ExpenseItem>
      <ExpenseItem expense={props.items[2]}></ExpenseItem>
      <ExpenseItem expense={props.items[3]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;