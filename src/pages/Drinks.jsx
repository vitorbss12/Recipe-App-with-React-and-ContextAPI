import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinksContext from '../context/DrinksContext';
import RecipeCard from '../components/RecipeCard';
import FilterContext from '../context/FilterContext';
import FilterBtn from '../components/FilterBtn';

function Drinks() {
  const RECIPES_PER_VISUALIZATION = 12;
  const FILTERS_PER_VISUALIZATION = 5;

  const { drinkData, fetchDrinksAPI, selectedDrinkFilter } = useContext(DrinksContext);
  const { fetchFilters, filterData } = useContext(FilterContext);

  const fetchDrinksOnLoad = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const APIurlFilterByCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  const fetchDrinkByCategory = `${APIurlFilterByCategory}${selectedDrinkFilter}`;

  const drinkFiltersUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  useEffect(() => {
    fetchDrinksAPI(fetchDrinksOnLoad);
    fetchFilters(drinkFiltersUrl);
  }, [fetchDrinksAPI, fetchFilters]);

  useEffect(() => {
    if (selectedDrinkFilter.length !== 0) fetchDrinksAPI(fetchDrinkByCategory);
  }, [selectedDrinkFilter, fetchDrinksAPI, fetchDrinkByCategory]);

  return (
    <div>
      <Header title="Drinks" showBtn />
      <Footer />
      <button
        type="button"
        onClick={ () => setSelectedFoodFilter('All') }
      >
        All
      </button>
      { filterData.length > 1 && (
        filterData.map((filter, index) => (
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
