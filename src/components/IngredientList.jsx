import React, { useContext, useState, useEffect } from 'react';
import useGetIngredients from '../hooks/useGetIngredients';
import DrinksContext from '../context/DrinksContext';

function IngredientList() {
  const { currentDrink } = useContext(DrinksContext);
  const [ingredientDone, setIngredientDone] = useState(false);
  const ingredients = useGetIngredients(currentDrink);
  const [itemChecked, setItemChecked] = useState(0);

  const buttonStyle = {
    margin: '5px',
    listStyle: 'none',
  };

  const ingredientDoneStyle = {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    margin: '5px',
    listStyle: 'none',
  };

  const handleChange = ({ target }) => {
    const checkedItem = target.parentNode;
    console.log(ingredients.indexOf(checkedItem));
    setIngredientDone(!ingredientDone);
  };

  useEffect(() => { console.log(ingredientDone); }, [ingredientDone]);

  return (
    <div>
      {
        ingredients.map((ingredient, index) => (
          <label
            key={ index }
            htmlFor={ `${index}-ingredient-step` }
            style={ ingredientDone ? (
              ingredientDoneStyle) : (buttonStyle) }
            data-testid={ `${index}-ingredient-step` }
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
