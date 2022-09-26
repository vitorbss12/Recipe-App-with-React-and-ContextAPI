import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import useFetchCurrentRecipe from '../../hooks/useFetchCurrentRecipe';
import Header from '../../components/Header/Header';
import RecipeContent from '../../components/RecipeContent/RecipeContent';

function DrinkRecipeDetails() {
  const location = useLocation();
  const [drinkId] = useState(parseInt(location.pathname.split('/')[2], 10));

  useFetchCurrentRecipe('drinks', drinkId);

  return (
    <Container fluid="xxl" className="d-flex flex-column w-100">
      <Header recipeDetails />
      <RecipeContent option="drinks" id={ drinkId } />
    </Container>
  );
}

export default DrinkRecipeDetails;
