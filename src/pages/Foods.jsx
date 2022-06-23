import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodsContext from '../context/FoodsContext';
import RecipeCard from '../components/RecipeCard';
import FilterBtn from '../components/FilterBtn';

function Foods() {
  const RECIPES_PER_VISUALIZATION = 12;
  const FILTERS_PER_VISUALIZATION = 5;

  const { foodData, fetchFoodsAPI, fetchFilters,
    filterFoodsData, selectedFoodFilter } = useContext(FoodsContext);

  const fetchFoodsOnLoad = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  // problema com linha de string grande:
  const APIurlFilterByCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const fetchFoodByCategory = `${APIurlFilterByCategory}${selectedFoodFilter}`;

  useEffect(() => {
    fetchFoodsAPI(fetchFoodsOnLoad);
    fetchFilters();
  }, [fetchFoodsAPI, fetchFilters]);

  useEffect(() => {
    fetchFoodsAPI(fetchFoodByCategory);
  }, [fetchFoodByCategory, fetchFoodsAPI, selectedFoodFilter]);

  return (
    <div>
      <Header title="Foods" showBtn />
      <Footer />
      { filterFoodsData.length > 1 && (
        filterFoodsData.map((filter, index) => (
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
