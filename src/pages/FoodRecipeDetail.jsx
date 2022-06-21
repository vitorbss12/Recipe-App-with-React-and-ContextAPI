import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchCurrentRecipe from '../hooks/useFetchCurrentRecipe';
import useRecommendations from '../hooks/useRecommendations';
import FoodsContext from '../context/FoodsContext';
import DrinksContext from '../context/DrinksContext';
import useGetIngredients from '../hooks/useGetIngredients';
import RecommendationCard from '../components/RecommendationCard';

function FoodRecipeDetail() {
  const { currentFood } = useContext(FoodsContext);
  const { drinksRecommendations } = useContext(DrinksContext);
  const location = useLocation();
  const foodId = parseInt(location.pathname.split('/')[2], 10);
  useFetchCurrentRecipe('foods', foodId);
  useRecommendations('drinks');
  const imgStyle = {
    width: '100%',
  };
  const fixedBottom = {
    position: 'fixed',
    bottom: 0,
  };

  const ingredients = useGetIngredients(currentFood);

  return (
    <main>
      <img
        src={ currentFood.strMealThumb }
        alt={ currentFood.strMeal }
        style={ imgStyle }
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title"><strong>{ currentFood.strMeal }</strong></p>
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
      <p data-testid="recipe-category">{ currentFood.strCategory }</p>
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
      <p data-testid="instructions">{ currentFood.strInstructions }</p>
      <p>
        <a
          href={ currentFood.strYoutube }
          target="_blank"
          rel="noopener noreferrer"
          data-testid="video"
        >
          Youtube Video
        </a>
      </p>
      <ul>
        {
          drinksRecommendations.map((alternative, index) => (
            <RecommendationCard
              option="food"
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

export default FoodRecipeDetail;
