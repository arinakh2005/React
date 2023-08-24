import React, { useCallback, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch('https://my-react-app-f5049-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ingredient),
    }).then((response) => {
      setIsLoading(false);

      return response.json()
    }).then((responseData) => {
      setUserIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: responseData.name, ...ingredient },
      ]);
    });
  };

  const removeIngredientHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(`https://my-react-app-f5049-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json/`, {
      method: 'DELETE',
    }).then((response) => {
      setIsLoading(false);
      setUserIngredients((prevIngredients) =>
        prevIngredients.filter((ingredient) => ingredient.id !== ingredientId),
      );
    }).catch((error) => {
      setError('Something went wrong!');
      setIsLoading(false);
    });
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

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