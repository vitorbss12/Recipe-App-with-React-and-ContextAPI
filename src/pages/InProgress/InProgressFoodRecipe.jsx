import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import FilterContext from '../../contexts/Filters/FilterContext';
import useFetchCurrentRecipe from '../../hooks/useFetchCurrentRecipe';
import Header from '../../components/Header/Header';
import RecipeContent from '../../components/RecipeContent/RecipeContent';
import FooterInProgress from '../../components/FooterInProgress/FooterInProgress';

function InProgressFoodRecipe() {
  const { doneRecipes } = useContext(FilterContext);
  const location = useLocation();
  const history = useHistory();
  const foodId = parseInt(location.pathname.split('/')[3], 10);

  useFetchCurrentRecipe('foods', foodId);

  const handleClick = () => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/Recipe-App-with-React-and-ContextAPI/done-recipes');
  };

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header recipeDetails />
      <RecipeContent page="in-progress" option="foods" id={ foodId } />
      <FooterInProgress onClick={ handleClick } id={ foodId } />
    </Container>
  );
}

export default InProgressFoodRecipe;
