import { useState } from 'react';
import classes from './InvestmentForm.module.css';
const initialUserInput = {
  currentSavings: 0,
  yearlySavings: 0,
  expectedReturn: 0,
  duration: 0,
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculateClick(userInput);
    resetHandler();
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (identifier, value) => {
   setUserInput((prevState) => {
     return {
       ...prevState,
       [identifier]: +value,
     };
   });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings"
                 value={userInput.currentSavings}
                 onChange={(event) => inputChangeHandler('currentSavings', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution"
                 value={userInput.yearlySavings}
                 onChange={(event) => inputChangeHandler('yearlySavings', event.target.value)}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return"
                 value={userInput.expectedReturn}
                 onChange={(event) => inputChangeHandler('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration"
                 value={userInput.duration}
                 onChange={(event) => inputChangeHandler('duration', event.target.value)}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;