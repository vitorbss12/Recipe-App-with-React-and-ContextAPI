import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FoodsContext from '../context/FoodsContext';
import useFetchCurrentRecipe from '../hooks/useFetchCurrentRecipe';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteButton from '../components/RecipeDetails/FavoriteButton';
import useGetIngredients from '../hooks/useGetIngredients';
import useGetDoneRecipe from '../hooks/useGetDoneRecipe';

function InProgressFoodRecipe() {
  const { currentFood } = useContext(FoodsContext);
  const location = useLocation();
  const foodId = parseInt(location.pathname.split('/')[2], 10);
  useFetchCurrentRecipe('foods', foodId);
  const ingredients = useGetIngredients(currentFood);
  const doneRecipe = useGetDoneRecipe(foodId);

  useEffect(() => {
    console.log(currentFood);
  }, [currentFood]);

  const imgStyle = {
    borderRadius: '25px',
    width: '100%',
    padding: '10px',
  };

  const buttonStyle = {
    margin: '5px',
    width: '100%',
  };

  const fixedBottom = {
    bottom: 0,
    left: 0,
    position: 'fixed',
    width: '100%',
  };

  return (
    <Container fluid style={ { marginBottom: '25px' } }>
      <img
        src={ currentFood.strMealThumb }
        alt={ currentFood.strMeal }
        style={ imgStyle }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title"><strong>{ currentFood.strMeal }</strong></h3>
      <ShareButton />
      <FavoriteButton id={ foodId } />
      <h5 data-testid="recipe-category">{ currentFood.strCategory }</h5>
      {
        ingredients.map((ingredient, index) => (
          <li
            style={ buttonStyle }
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            { ingredient }
          </li>
        ))
      }
      <p data-testid="instructions">{ currentFood.strInstructions }</p>
      {
        !doneRecipe && (
          <Navbar fixed="bottom">
            <Button
              type="submit"
              data-testid="finish-recipe-btn"
              style={ fixedBottom }
            >
              Finalizar Receita
            </Button>
          </Navbar>
        )
      }
    </Container>
  );
}

export default InProgressFoodRecipe;
