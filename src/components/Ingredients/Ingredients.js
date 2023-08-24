import React, { useCallback, useState } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = (ingredient) => {
    fetch('https://my-react-app-f5049-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ingredient),
    }).then((response) => {
      return response.json()
    }).then((responseData) => {
      setUserIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: responseData.name, ...ingredient },
      ]);
    });
  };

  const removeIngredientHandler = (ingredientId) => {
    fetch(`https://my-react-app-f5049-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json/`, {
      method: 'DELETE',
    }).then((response) => {
      setUserIngredients((prevIngredients) =>
        prevIngredients.filter((ingredient) => ingredient.id !== ingredientId),
      );
    });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;