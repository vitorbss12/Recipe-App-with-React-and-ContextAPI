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
import DrinksContext from '../context/DrinksContext';
import FoodsContext from '../context/FoodsContext';
import RecommendationCard from '../components/RecommendationCard';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteButton from '../components/RecipeDetails/FavoriteButton';

function DrinkRecipeDetails() {
  const { currentDrink } = useContext(DrinksContext);
  const { foodsRecommendations } = useContext(FoodsContext);
  const location = useLocation();
  const history = useHistory();
  const drinkId = parseInt(location.pathname.split('/')[2], 10);
  useFetchCurrentRecipe('drinks', drinkId);
  useRecommendations('foods');
  const doneRecipe = useGetDoneRecipe(drinkId);
  const inProgressRecipe = useGetInProgressRecipe('drink', drinkId);
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

  const ingredients = useGetIngredients(currentDrink);

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
        {
          `${currentDrink.strAlcoholic} - ${currentDrink.strCategory}`
        }
      </h5>
      <ShareButton />
      <FavoriteButton id={ drinkId } />
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
      <p data-testid="instructions">{ currentDrink.strInstructions }</p>
      <Table responsive>
        <tbody>
          <tr>
            {
              foodsRecommendations.map((alternative, index) => (
                <td key={ index } data-testid={ `${index}-recomendation-card` }>
                  <RecommendationCard
                    option="foods"
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
              onClick={ () => history.push(`/drinks/${drinkId}/in-progress`) }
            >
              { inProgressRecipe ? 'Continue Recipe' : 'Start Recipe' }
            </Button>
          </Navbar>
        )
      }
    </Container>
  );
}

export default DrinkRecipeDetails;
