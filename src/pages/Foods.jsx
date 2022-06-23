import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodsContext from '../context/FoodsContext';
import RecipeCard from '../components/RecipeCard';
import FilterBtn from '../components/FilterBtn';
import FilterContext from '../context/FilterContext';

function Foods() {
  const RECIPES_PER_VISUALIZATION = 12;
  const FILTERS_PER_VISUALIZATION = 5;

  const { foodData, fetchFoodsAPI, selectedFoodFilter } = useContext(FoodsContext);
  const { fetchFilters, filterData } = useContext(FilterContext);

  const fetchFoodsOnLoad = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  // problema com linha de string grande:
  const APIurlFilterByCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const fetchFoodByCategory = `${APIurlFilterByCategory}${selectedFoodFilter}`;

  const foodFiltersURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  useEffect(() => {
    fetchFoodsAPI(fetchFoodsOnLoad);
    fetchFilters(foodFiltersURL);
  }, [fetchFoodsAPI, fetchFilters]);

  useEffect(() => {
    if (selectedFoodFilter.length !== 0) fetchFoodsAPI(fetchFoodByCategory);
  }, [fetchFoodByCategory, fetchFoodsAPI, selectedFoodFilter]);

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
      { foodData.length > 1 || selectedFoodFilter === 'Goat' ? (
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
      ) : null }
    </div>
  );
}

export default Foods;
