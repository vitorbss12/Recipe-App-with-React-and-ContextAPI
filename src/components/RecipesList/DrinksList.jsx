import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import RecipeCard from '../RecipeCard/RecipeCard';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import './RecipeList.css';

function FoodsLists() {
  const { drinkData } = useContext(RecipesContext);
  const RECIPES_PER_VISUALIZATION = 12;

  return (
    <Container
      className="overflow-auto d-flex flex-wrap justify-content-center align-items-center"
    >
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
