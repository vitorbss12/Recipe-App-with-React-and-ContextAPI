import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FoodsContext from '../../context/FoodsContext';
import FilterContext from '../../context/FilterContext';
import Categories from '../../components/Filters/Categories';
import FoodsList from '../../components/RecipesList/FoodsList';
import fetchAllFoods from '../../hooks-utils/Foods-fetch/fetchAllFoods';
import fetchFoodsByCategory from '../../hooks-utils/Foods-fetch/fetchFoodsByCategory';
import fetchFoodsCategories from '../../hooks-utils/Foods-fetch/fetchFoodsCategories';

function Foods() {
  const { foodData, setFoodData, selectedFoodFilter } = useContext(FoodsContext);

  const { setFilterData } = useContext(FilterContext);
  console.log(foodData);

  useEffect(() => {
    async function fetchAllFoodsAndCategories() {
      const foods = await fetchAllFoods();
      setFoodData(foods);
      const categories = await fetchFoodsCategories();
      setFilterData(categories);
    }
    fetchAllFoodsAndCategories();
  }, [setFoodData, setFilterData]);

  useEffect(() => {
    async function fetchByCategory() {
      const foods = await fetchFoodsByCategory(selectedFoodFilter);
      setFoodData(foods);
    }
    fetchByCategory();
  }, [setFoodData, selectedFoodFilter]);

  return (
    <div>
      <Header title="Foods" showSearchBar />
      <Categories type="food" />
      <FoodsList />
      <Footer />
    </div>
  );
}

export default Foods;
