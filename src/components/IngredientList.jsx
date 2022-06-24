import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useGetIngredients from '../hooks/useGetIngredients';
import DrinksContext from '../context/DrinksContext';
import FoodsContext from '../context/FoodsContext';

function IngredientList({ option, id }) {
  const { currentDrink } = useContext(DrinksContext);
  const { currentFood } = useContext(FoodsContext);
  const [currentRecipe, setCurrentRecipe] = useState('');
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [inProgress, setInProgress] = useState(false);
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [key, setKey] = useState('');
  const ingredients = useGetIngredients(currentRecipe);

  useEffect(() => {
    if (option === 'drink') {
      setCurrentRecipe(currentDrink);
      setKey('cocktails');
    }
    if (option === 'food') {
      setCurrentRecipe(currentFood);
      setKey('meals');
    }
  }, [currentDrink, currentFood, option]);

  const buttonStyle = {
    margin: '5px',
    width: '100%',
  };

  useEffect(() => {
    console.log(doneRecipe);
  }, [doneRecipe]);

  useEffect(() => {
    if (ingredients.length === currentIngredients.length) {
      setDoneRecipe(true);
    } else {
      setDoneRecipe(false);
    }
  }, [ingredients, currentIngredients]);

  useEffect(() => {
    const pastLocalStore = JSON
      .parse(localStorage.getItem('inProgressRecipes')) || {};
    if (inProgress) {
      const newLocalStore = { ...pastLocalStore, [key]: { [id]: currentIngredients } };
      if (newLocalStore[key][id].length === 0) {
        delete newLocalStore[key][id];
      }
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocalStore));
    }
  }, [inProgress, key, id, currentIngredients]);

  useEffect(() => {
    if (currentIngredients.length > 0) {
      setInProgress(true);
    } else {
      setInProgress(false);
    }
  }, [currentIngredients]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      target.parentNode.style.textDecorationLine = 'line-through';
    } else {
      target.parentNode.style.textDecorationLine = 'none';
    }
  };

  // const test = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  // console.log(test);

  const getCurrentIngredients = (currentIngredient) => {
    if (!currentIngredients.includes(currentIngredient)) {
      setCurrentIngredients([...currentIngredients, currentIngredient]);
    }
    if (currentIngredients.includes(currentIngredient)) {
      setCurrentIngredients(currentIngredients
        .filter((ingred) => ingred !== currentIngredient));
    }
  };

  // const test = (el) => {
  //   const test2 = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  //   if (test2 && test2[key][id].includes(el)) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <div>
      {
        ingredients.map((ingredient, index) => (
          <label
            key={ index }
            htmlFor={ `${index}-ingredient-step` }
            style={ buttonStyle }
            data-testid={ `${index}-ingredient-step` }
            onChange={ () => getCurrentIngredients(ingredient) }
          >
            <input
              type="checkbox"
              id={ `${index}-ingredient-step` }
              onChange={ handleChange }
              // checked={ test(ingredient) }
            />
            {ingredient}
          </label>
        ))
      }
    </div>
  );
}

IngredientList.propTypes = {
  option: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default IngredientList;
