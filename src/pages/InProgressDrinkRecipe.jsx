import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import useFetchCurrentRecipe from '../hooks/useFetchCurrentRecipe';
import useRecommendations from '../hooks/useRecommendations';
import useGetDoneRecipe from '../hooks/useGetDoneRecipe';
import DrinksContext from '../context/DrinksContext';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteButton from '../components/RecipeDetails/FavoriteButton';
import IngredientList from '../components/IngredientList';

function DrinkRecipeDetails() {
  const { currentDrink } = useContext(DrinksContext);
  const location = useLocation();
  const drinkId = parseInt(location.pathname.split('/')[2], 10);
  useFetchCurrentRecipe('drinks', drinkId);
  useRecommendations('foods');
  const doneRecipe = useGetDoneRecipe(drinkId);

  const imgStyle = {
    borderRadius: '25px',
    width: '100%',
    padding: '10px',
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
        src={ currentDrink.strDrinkThumb }
        alt={ currentDrink.strDrink }
        style={ imgStyle }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title"><strong>{ currentDrink.strDrink }</strong></h3>
      <h5 data-testid="recipe-category">
        {currentDrink.strCategory}
      </h5>
      <ShareButton />
      <FavoriteButton id={ drinkId } />
      <IngredientList />
      <p data-testid="instructions">{ currentDrink.strInstructions }</p>
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

export default DrinkRecipeDetails;
