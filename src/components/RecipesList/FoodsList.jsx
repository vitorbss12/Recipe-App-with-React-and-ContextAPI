import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import RecipeCard from '../RecipeCard';
import FoodsContext from '../../context/FoodsContext';
import '../../styles/components/RecipeLists.css';

function FoodsLists() {
  const { foodData } = useContext(FoodsContext);
  const RECIPES_PER_VISUALIZATION = 12;

  console.log(foodData);

  return (
    <Container className="recipe-container overflow-auto">
      {
        foodData.map((recipe, index) => (
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
        ))
      }
    </Container>
  );
}

export default FoodsLists;
