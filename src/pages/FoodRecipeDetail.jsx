import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import useFetchCurrentRecipe from '../hooks/useFetchCurrentRecipe';
import useRecommendations from '../hooks/useRecommendations';
import useGetIngredients from '../hooks/useGetIngredients';
import useGetDoneRecipe from '../hooks/useGetDoneRecipe';
import useGetInProgressRecipe from '../hooks/useGetInProgressRecipe';
import FoodsContext from '../context/FoodsContext';
import DrinksContext from '../context/DrinksContext';
import RecommendationCard from '../components/RecommendationCard';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteButton from '../components/RecipeDetails/FavoriteButton';

function FoodRecipeDetail() {
  const { currentFood } = useContext(FoodsContext);
  const { drinksRecommendations } = useContext(DrinksContext);
  const location = useLocation();
  const history = useHistory();
  const foodId = parseInt(location.pathname.split('/')[2], 10);
  useFetchCurrentRecipe('foods', foodId);
  useRecommendations('drinks');
  const doneRecipe = useGetDoneRecipe(foodId);
  const inProgressRecipe = useGetInProgressRecipe('food', foodId);
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

  const ingredients = useGetIngredients(currentFood);

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
      <FavoriteButton id={ foodId } />
      {
        ingredients.map((ingredient, index) => (
          <li
            style={ buttonStyle }
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { ingredient }
          </li>
        ))
      }
      <p data-testid="instructions">{ currentFood.strInstructions }</p>
      <h5>
        <a
          href={ currentFood.strYoutube }
          target="_blank"
          rel="noopener noreferrer"
          data-testid="video"
        >
          Youtube Video
        </a>
      </h5>
      <Table responsive>
        <tbody>
          <tr>
            {
              drinksRecommendations.map((alternative, index) => (
                <td key={ index } data-testid={ `${index}-recomendation-card` }>
                  <RecommendationCard
                    option="drinks"
                    recipe={ alternative }
                    index={ index }
                  />
                </td>
              ))
            }
          </tr>
        </tbody>
      </Table>
      {
        !doneRecipe && (
          <Navbar fixed="bottom">
            <Button
              type="submit"
              data-testid="start-recipe-btn"
              style={ fixedBottom }
              onClick={ () => history.push(`/foods/${foodId}/in-progress`) }
            >
              { inProgressRecipe ? 'Continue Recipe' : 'Start Recipe' }
            </Button>
          </Navbar>
        )
      }
    </Container>
  );
}

export default FoodRecipeDetail;
