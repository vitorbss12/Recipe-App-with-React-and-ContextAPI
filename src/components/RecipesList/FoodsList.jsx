import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import RecipeCard from '../RecipeCard/RecipeCard';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import './RecipeList.css';

function FoodsLists() {
  const { foodData } = useContext(RecipesContext);
  const RECIPES_PER_VISUALIZATION = 12;

  return (
    <Container
      className="overflow-auto d-flex flex-wrap justify-content-center align-items-center"
    >
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
