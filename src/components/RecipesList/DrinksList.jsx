import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import RecipeCard from '../RecipeDetails/RecipeCard';
import DrinksContext from '../../context/DrinksContext';

function FoodsLists() {
  const { drinkData } = useContext(DrinksContext);
  const RECIPES_PER_VISUALIZATION = 12;

  return (
    <Container>
      { drinkData
        && drinkData.map((recipe, index) => (
          index < RECIPES_PER_VISUALIZATION && (
            <RecipeCard
              id={ index }
              img={ recipe.strDrinkThumb }
              imgAlt={ recipe.strDrink }
              name={ recipe.strDrink }
              key={ recipe.idDrink }
              urlId={ recipe.idDrink }
              option="drink"
            />)
        ))}
    </Container>
  );
}

export default FoodsLists;
