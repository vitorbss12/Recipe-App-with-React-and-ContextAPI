import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import useFetchCurrentRecipe from '../../hooks/useFetchCurrentRecipe';
import Header from '../../components/Header/Header';
import RecipeContent from '../../components/RecipeContent/RecipeContent';
import FooterDetails from '../../components/FooterDetails/FooterDetails';

function DrinkRecipeDetails() {
  const location = useLocation();
  const [recipeId] = useState(parseInt(location.pathname.split('/')[3], 10));

  useFetchCurrentRecipe('drinks', recipeId);

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header recipeDetails />
      <RecipeContent option="drinks" id={ recipeId } />
      <FooterDetails option="drinks" id={ recipeId } />
    </Container>
  );
}

export default DrinkRecipeDetails;
