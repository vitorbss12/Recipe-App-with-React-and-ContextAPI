import { useEffect, useContext } from 'react';
import RecipesContext from '../contexts/Recipes/RecipesContext';

const SIX_NUMBER = 6;

function useFetchDrinksRecommendations(options) {
  const {
    setFoodsRecommendations,
    setDrinksRecommendations,
  } = useContext(RecipesContext);

  useEffect(() => {
    if (options === 'foods') {
      const fetchData = async () => {
        await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          .then((response) => response.json())
          .then(
            (dataAPI) => {
              setFoodsRecommendations(dataAPI.meals.slice(0, SIX_NUMBER));
            },
            (error) => {
              console.log(error);
            },
          );
      };
      fetchData();
    }
    if (options === 'drinks') {
      const fetchData = async () => {
        await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
          .then((response) => response.json())
          .then(
            (dataAPI) => {
              setDrinksRecommendations(dataAPI.drinks.slice(0, SIX_NUMBER));
            },
            (error) => {
              console.log(error);
            },
          );
      };
      fetchData();
    }
  }, [setFoodsRecommendations, setDrinksRecommendations, options]);
}

export default useFetchDrinksRecommendations;
