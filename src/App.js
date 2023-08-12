import { useState } from 'react';
import ResultTable from './components/ResultTable/ResultTable';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import Header from './components/Header/Header';

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest,
        yearlyContribution,
        savingsEndOfYear: currentSavings,
      });
    }
  }

  return (
    <div>
      <Header />
      <InvestmentForm onCalculateClick={calculateHandler} />
      {!userInput && <p>No investment calculated yet.</p>}
      {userInput && <ResultTable data={yearlyData} initialInvestment={userInput.currentSavings} />}
    </div>
  );
}

export default App;
