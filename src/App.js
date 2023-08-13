import React from 'react';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
