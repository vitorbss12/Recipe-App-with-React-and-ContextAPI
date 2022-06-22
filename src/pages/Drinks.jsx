import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinksContext from '../context/DrinksContext';
import RecipeCard from '../components/RecipeCard';
import FilterBtn from '../components/FilterBtn';

function Drinks() {
  const RECIPES_PER_VISUALIZATION = 12;
  const FILTERS_PER_VISUALIZATION = 5;

  const { drinkData, fetchOnLoad, fetchFilters, filterData } = useContext(DrinksContext);

  useEffect(() => {
    fetchOnLoad();
    fetchFilters();
  }, [fetchOnLoad, fetchFilters]);

  return (
    <div>
      <Header title="Drinks" showBtn />
      <Footer />
      <Footer />
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
