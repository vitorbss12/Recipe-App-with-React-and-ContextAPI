import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import FilterContext from '../../contexts/Filters/FilterContext';
import useFetchCurrentRecipe from '../../hooks/useFetchCurrentRecipe';
import ShareButton from '../../components/ShareButton/ShareButton';
import FavoriteButton
from '../../components/FavoriteButtonInDetails/FavoriteButtonInDetails';
import RecipeInProgressIngredients
from '../../components/RecipeInProgressIngredients/RecipeInProgressIngredients';

function DrinkRecipeDetails() {
  const { currentDrink } = useContext(RecipesContext);
  const { doneRecipes, disabledBtn } = useContext(FilterContext);
  const location = useLocation();
  const history = useHistory();
  const drinkId = parseInt(location.pathname.split('/')[2], 10);
  useFetchCurrentRecipe('drinks', drinkId);

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

  const handleClick = () => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/done-recipes');
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
      <FavoriteButton option="drink" id={ drinkId } />
      <RecipeInProgressIngredients option="drink" id={ drinkId } />
      <p data-testid="instructions">{ currentDrink.strInstructions }</p>
      <Navbar fixed="bottom">
        <Button
          type="submit"
          data-testid="finish-recipe-btn"
          style={ fixedBottom }
          disabled={ disabledBtn }
          onClick={ handleClick }
        >
          Finalizar Receita
        </Button>
      </Navbar>
    </Container>
  );
}

export default DrinkRecipeDetails;
