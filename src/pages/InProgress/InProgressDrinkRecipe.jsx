import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/Header';
import RecipeContent from '../../components/RecipeContent/RecipeContent';
import FilterContext from '../../contexts/Filters/FilterContext';
import useFetchCurrentRecipe from '../../hooks/useFetchCurrentRecipe';
import FooterInProgress from '../../components/FooterInProgress/FooterInProgress';

function DrinkRecipeDetails() {
  const { doneRecipes } = useContext(FilterContext);
  const location = useLocation();
  const history = useHistory();
  const drinkId = parseInt(location.pathname.split('/')[2], 10);

  useFetchCurrentRecipe('drinks', drinkId);

  const handleClick = () => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/done-recipes');
  };

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header recipeDetails />
      <RecipeContent page="in-progress" option="drinks" id={ drinkId } />
      <FooterInProgress onClick={ handleClick } id={ drinkId } />
    </Container>
  );
}

export default DrinkRecipeDetails;
