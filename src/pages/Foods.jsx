import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodsContext from '../context/FoodsContext';
import RecipeCard from '../components/RecipeCard';
import FilterBtn from '../components/FilterBtn';

function Foods() {
  const RECIPES_PER_VISUALIZATION = 12;
  const FILTERS_PER_VISUALIZATION = 5;

  const { foodData, fetchOnLoad, fetchFilters, filterData } = useContext(FoodsContext);
  console.log(filterData);

  useEffect(() => {
    fetchOnLoad();
    fetchFilters();
  }, [fetchOnLoad, fetchFilters]);

  return (
    <div>
      <Header title="Foods" showBtn />
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
      { foodData.length > 1 && (
        foodData.map((recipe, index) => (
          index < RECIPES_PER_VISUALIZATION && (
            <RecipeCard
              id={ index }
              img={ recipe.strMealThumb }
              imgAlt={ recipe.strMeal }
              name={ recipe.strMeal }
              key={ recipe.idMeal }
            />)
        ))
      ) }
    </div>
  );
}

export default Foods;
