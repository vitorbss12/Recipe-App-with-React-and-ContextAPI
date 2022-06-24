import React, { useContext } from 'react';
import useGetIngredients from '../hooks/useGetIngredients';
import DrinksContext from '../context/DrinksContext';
// opa!

function IngredientList() {
  const { currentDrink } = useContext(DrinksContext);
  const ingredients = useGetIngredients(currentDrink);

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

export default IngredientList;
