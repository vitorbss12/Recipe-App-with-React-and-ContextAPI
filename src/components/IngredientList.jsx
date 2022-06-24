import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useGetIngredients from '../hooks/useGetIngredients';
import DrinksContext from '../context/DrinksContext';
import FoodsContext from '../context/FoodsContext';

function IngredientList({ option }) {
  const { currentDrink } = useContext(DrinksContext);
  const { currentFood } = useContext(FoodsContext);
  const [currentRecipe, setCurrentRecipe] = useState('');
  const ingredients = useGetIngredients(currentRecipe);

  useEffect(() => {
    if (option === 'drink') {
      setCurrentRecipe(currentDrink);
    }
    if (option === 'food') {
      setCurrentRecipe(currentFood);
    }
  }, [currentDrink, currentFood, option]);

  const buttonStyle = {
    margin: '5px',
    width: '100%',
  };

  const handleChange = ({ target }) => {
    if (target.checked) {
      target.parentNode.style.textDecorationLine = 'line-through';
    } else {
      target.parentNode.style.textDecorationLine = 'none';
    }
  };

  return (
    <div>
      {
        ingredients.map((ingredient, index) => (
          <label
            key={ index }
            htmlFor={ `${index}-ingredient-step` }
            data-testid={ `${index}-ingredient-step` }
            style={ buttonStyle }
          >
            <input
              type="checkbox"
              id={ `${index}-ingredient-step` }
              onChange={ handleChange }
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
};

export default IngredientList;
