import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
import useFetchCurrentRecipe from '../../hooks/useFetchCurrentRecipe';
// import useGetDoneRecipe from '../../utils/getDoneRecipe';
// import useGetInProgressRecipe from '../../utils/getInProgressRecipe';
import Header from '../../components/Header/Header';
import RecipeContent from '../../components/RecipeContent/RecipeContent';

function FoodRecipeDetail() {
  const location = useLocation();
  const [foodId] = useState(parseInt(location.pathname.split('/')[2], 10));
  // const [doneRecipe, setDoneRecipe] = useState(false);
  // const [inProgressRecipe, setInProgressRecipe] = useState(false);
  useFetchCurrentRecipe('foods', foodId);
  // const history = useHistory();

  // setDoneRecipe(useGetDoneRecipe(foodId));
  // setInProgressRecipe(useGetInProgressRecipe('food', foodId));

  return (
    <Container fluid="xxl" className="d-flex flex-column w-100">
      <Header recipeDetails />
      <RecipeContent option="foods" id={ foodId } />
      {/* // {
        //   !doneRecipe && (
        //     <Navbar fixed="bottom">
        //       <Button
        //         type="submit"
        //         data-testid="start-recipe-btn"
        //         onClick={ () => history.push(`/foods/${foodId}/in-progress`) }
        //       >
        //         { inProgressRecipe ? 'Continue Recipe' : 'Start Recipe' }
        //       </Button>
        //     </Navbar>
        //   )
        // } */}
    </Container>
  );
}

export default FoodRecipeDetail;
