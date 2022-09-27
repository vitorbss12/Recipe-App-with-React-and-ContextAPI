import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import useFetchCurrentRecipe from '../../hooks/useFetchCurrentRecipe';
import Header from '../../components/Header/Header';
import RecipeContent from '../../components/RecipeContent/RecipeContent';
import FooterDetails from '../../components/FooterDetails/FooterDetails';

function FoodRecipeDetail() {
  const location = useLocation();
  const [recipeId] = useState(parseInt(location.pathname.split('/')[3], 10));

  useFetchCurrentRecipe('foods', recipeId);

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header recipeDetails />
      <RecipeContent option="foods" id={ recipeId } />
      <FooterDetails option="foods" id={ recipeId } />
    </Container>
  );
}

export default FoodRecipeDetail;
