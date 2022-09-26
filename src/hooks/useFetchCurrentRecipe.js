import { useEffect, useContext } from 'react';
import RecipesContext from '../contexts/Recipes/RecipesContext';

function useFetchCurrentRecipe(option, id) {
  const {
    setCurrentFood,
    setCurrentDrink,
    setLoading,
  } = useContext(RecipesContext);

  useEffect(() => {
    setLoading(true);
    if (option === 'foods') {
      const fetchData = async () => {
        await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((response) => response.json())
          .then(
            (dataAPI) => {
              setCurrentFood(dataAPI.meals[0]);
            },
            (error) => {
              console.log(error);
            },
          );
      };
      fetchData();
    }
    if (option === 'drinks') {
      setLoading(true);
      const fetchData = async () => {
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((response) => response.json())
          .then(
            (dataAPI) => {
              setCurrentDrink(dataAPI.drinks[0]);
            },
            (error) => {
              console.log(error);
            },
          );
      };
      fetchData();
    }
  }, [setCurrentDrink, setCurrentFood, setLoading, option, id]);
}

export default useFetchCurrentRecipe;
