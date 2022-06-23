import { useEffect, useContext } from 'react';
import DrinksContext from '../context/DrinksContext';
import FoodsContext from '../context/FoodsContext';

function useFetchCurrentRecipe(option, id) {
  const { setCurrentDrink } = useContext(DrinksContext);
  const { setCurrentFood } = useContext(FoodsContext);

  useEffect(() => {
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
      const fetchData = async () => {
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((response) => response.json())
          .then(
            (dataAPI) => {
              console.log(dataAPI);
              setCurrentDrink(dataAPI.drinks[0]);
            },
            (error) => {
              console.log(error);
            },
          );
      };
      fetchData();
    }
  }, [setCurrentDrink, setCurrentFood, option, id]);
}

export default useFetchCurrentRecipe;
