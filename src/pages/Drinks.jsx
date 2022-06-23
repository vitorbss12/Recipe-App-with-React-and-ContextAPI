import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinksContext from '../context/DrinksContext';
import RecipeCard from '../components/RecipeCard';
import FilterBtn from '../components/FilterBtn';

function Drinks() {
  const RECIPES_PER_VISUALIZATION = 12;
  const FILTERS_PER_VISUALIZATION = 5;

  const { drinkData, fetchDrinksAPI, fetchFilters,
    filterDrinksData, selectedDrinkFilter } = useContext(DrinksContext);

  const fetchDrinksOnLoad = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const APIurlFilterByCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  const fetchDrinkByCategory = `${APIurlFilterByCategory}${selectedDrinkFilter}`;

  useEffect(() => {
    fetchDrinksAPI(fetchDrinksOnLoad);
    const test = async () => {
      await fetchFilters();
    };
    test();
  }, [fetchDrinksAPI, fetchFilters]);

  useEffect(() => {
    console.log(selectedDrinkFilter);
    if (selectedDrinkFilter.length !== 0) {
      fetchDrinksAPI(fetchDrinkByCategory);
    }
  }, [selectedDrinkFilter, fetchDrinksAPI, fetchDrinkByCategory]);

  return (
    <div>
      <Header title="Drinks" showBtn />
      <Footer />
      { filterDrinksData.length > 1 && (
        filterDrinksData.map((filter, index) => (
          index < FILTERS_PER_VISUALIZATION && (
            <FilterBtn
              key={ filter.strCategory }
              name={ filter.strCategory }
            />
          )
        ))
      ) }
      { drinkData.length > 1 && (
        drinkData.map((recipe, index) => (
          index < RECIPES_PER_VISUALIZATION && (
            <RecipeCard
              id={ index }
              img={ recipe.strDrinkThumb }
              name={ recipe.strDrink }
              key={ recipe.idDrink }
            />)))

      ) }
    </div>
  );
}

export default Drinks;
