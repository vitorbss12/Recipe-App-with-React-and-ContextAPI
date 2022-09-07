import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
// import Footer from '../components/Footer';
import FoodsContext from '../../context/FoodsContext';
// import RecipeCard from '../../components/RecipeCard';
// import FilterBtn from '../components/FilterBtn';
import FilterContext from '../../context/FilterContext';
import Categories from '../../components/Categories';
import FoodsList from '../../components/RecipesList/FoodsList';
import fetchAllFoods from '../../hooks/Foods/fetchAllFoods';
import fetchFoodsCategories from '../../hooks/Foods/fetchFoodsCategories';

function Foods() {
  const { foodData, setFoodData } = useContext(FoodsContext);
  const { setFilterData } = useContext(FilterContext);
  console.log(foodData);


  
  // const { foodData,
  //   fetchFoodsAPI, selectedFoodFilter, setSelectedFoodFilter } = useContext(FoodsContext);
  // const { fetchFilters, filterData } = useContext(FilterContext);

  // const { fetchFoodsAPI, selectedFoodFilter } = useContext(FoodsContext);
  // const { fetchFilters } = useContext(FilterContext);

  // const fetchFoodsOnLoad = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  // problema com linha de string grande:
  // const APIurlFilterByCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  // const fetchFoodByCategory = `${APIurlFilterByCategory}${selectedFoodFilter}`;

  // const foodFiltersURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  // useEffect(() => {
  //   // fetchFoodsAPI(fetchFoodsOnLoad);
  //   fetchFilters(foodFiltersURL);
  // }, [fetchFoodsAPI, fetchFilters]);

  // useEffect(() => {
  //   if (selectedFoodFilter.length !== 0) fetchFoodsAPI(fetchFoodByCategory);
  // }, [fetchFoodByCategory, fetchFoodsAPI, selectedFoodFilter]);

  useEffect(() => {
    async function fetchFoods() {
      const foods = await fetchAllFoods();
      setFoodData(foods);
    }
    fetchFoods();
  }, [setFoodData]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await fetchFoodsCategories();
      setFilterData(categories);
    }
    fetchCategories();
  }, [setFilterData]);

  return (
    <div>
      <Header title="Foods" showSearchBar />
      <Categories type="food" />
      <FoodsList />
      {/* <Footer /> */}
    </div>
  );
}

export default Foods;
