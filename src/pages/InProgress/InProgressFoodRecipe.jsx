import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FoodsContext from '../../context/FoodsContext';
import FilterContext from '../../context/FilterContext';
import useFetchCurrentRecipe from '../../hooks-utils/useFetchCurrentRecipe';
import ShareButton from '../../components/RecipeDetails/ShareButton';
import FavoriteButton from '../../components/RecipeDetails/FavoriteButton';
import IngredientList from '../../components/RecipeDetails/IngredientList';

function InProgressFoodRecipe() {
  const { currentFood } = useContext(FoodsContext);
  const { doneRecipes, disabledBtn } = useContext(FilterContext);
  const location = useLocation();
  const history = useHistory();
  const foodId = parseInt(location.pathname.split('/')[2], 10);
  useFetchCurrentRecipe('foods', foodId);

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
        src={ currentFood.strMealThumb }
        alt={ currentFood.strMeal }
        style={ imgStyle }
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title"><strong>{ currentFood.strMeal }</strong></h3>
      <h5 data-testid="recipe-category">{ currentFood.strCategory }</h5>
      <ShareButton />
      <FavoriteButton option="food" id={ foodId } />
      <IngredientList option="food" id={ foodId } />
      <p data-testid="instructions">{ currentFood.strInstructions }</p>
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

export default InProgressFoodRecipe;
