import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FoodsContext from '../../context/FoodsContext';
import FilterContext from '../../context/FilterContext';
import Categories from '../../components/Categories/Categories';
import FoodsList from '../../components/RecipesList/FoodsList';
import fetchAllFoods from '../../hooks-utils/Foods-fetch/fetchAllFoods';
import fetchFoodsByCategory from '../../hooks-utils/Foods-fetch/fetchFoodsByCategory';
import fetchFoodsCategories from '../../hooks-utils/Foods-fetch/fetchFoodsCategories';

function Foods() {
  const {
    setFoodData,
    selectedFoodFilter,
  } = useContext(FoodsContext);

  const { setFilterData, setCategory } = useContext(FilterContext);

  useEffect(() => {
    async function fetchAllFoodsAndCategories() {
      const foods = await fetchAllFoods();
      setFoodData(foods);
      const categories = await fetchFoodsCategories();
      setFilterData(categories);
    }
    fetchAllFoodsAndCategories();
    setCategory('All');
  }, [setFoodData, setFilterData, setCategory]);

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
