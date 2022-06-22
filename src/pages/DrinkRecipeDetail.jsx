import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchCurrentRecipe from '../hooks/useFetchCurrentRecipe';
import useRecommendations from '../hooks/useRecommendations';
import DrinksContext from '../context/DrinksContext';
import useGetIngredients from '../hooks/useGetIngredients';
import FoodsContext from '../context/FoodsContext';
import RecommendationCard from '../components/RecommendationCard';

function DrinkRecipeDetails() {
  const { currentDrink } = useContext(DrinksContext);
  const { foodsRecommendations } = useContext(FoodsContext);
  const location = useLocation();
  const drinkId = parseInt(location.pathname.split('/')[2], 10);
  useFetchCurrentRecipe('drinks', drinkId);
  useRecommendations('foods');
  const imgStyle = {
    width: '100%',
  };
  const fixedBottom = {
    position: 'fixed',
    bottom: 0,
  };

  const ingredients = useGetIngredients(currentDrink);

  return (
    <main>
      <img
        src={ currentDrink.strDrinkThumb }
        alt={ currentDrink.strDrink }
        style={ imgStyle }
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title"><strong>{ currentDrink.strDrink }</strong></p>
      <button
        type="submit"
        data-testid="share-btn"
        onClick={ (e) => e.preventDefault() }
      >
        Compartilhar
      </button>
      <button
        type="submit"
        data-testid="favorite-btn"
        onClick={ (e) => e.preventDefault() }
      >
        Favoritar
      </button>
      <p data-testid="recipe-category">
        {
          `${currentDrink.strAlcoholic} - ${currentDrink.strCategory}`
        }
      </p>
      <ul>
        {
          ingredients.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { ingredient }
            </li>
          ))
        }
      </ul>
      <p data-testid="instructions">{ currentDrink.strInstructions }</p>
      <ul>
        {
          foodsRecommendations.map((alternative, index) => (
            <RecommendationCard
              option="foods"
              key={ index }
              recipe={ alternative }
              index={ index }
            />
          ))
        }
      </ul>
      <button
        type="submit"
        data-testid="start-recipe-btn"
        onClick={ (e) => e.preventDefault() }
        style={ fixedBottom }
      >
        Iniciar Receita
      </button>
    </main>
  );
}

export default DrinkRecipeDetails;
