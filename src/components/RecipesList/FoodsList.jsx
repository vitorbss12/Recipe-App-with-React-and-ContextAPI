import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import RecipeCard from '../RecipeDetails/RecipeCard';
import FoodsContext from '../../context/FoodsContext';

function FoodsLists() {
  const { foodData } = useContext(FoodsContext);
  const RECIPES_PER_VISUALIZATION = 12;

  return (
    <Container className="recipe-container overflow-auto">
      { foodData
        && foodData.map((recipe, index) => (
          index < RECIPES_PER_VISUALIZATION && (
            <RecipeCard
              id={ index }
              img={ recipe.strMealThumb }
              imgAlt={ recipe.strMeal }
              name={ recipe.strMeal }
              key={ recipe.idMeal }
              urlId={ recipe.idMeal }
              option="food"
            />)
        ))}
    </Container>
  );
}

export default FoodsLists;
