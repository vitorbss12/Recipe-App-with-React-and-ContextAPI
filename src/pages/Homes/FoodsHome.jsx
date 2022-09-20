import React, { useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import FilterContext from '../../contexts/Filters/FilterContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Categories from '../../components/Categories/Categories';
// import FoodsList from '../../components/RecipesList/FoodsList';
import callFoodsApi from '../../utils/Foods';
import './FoodsHome.css';

function Foods() {
  const {
    setFoodData,
    selectedFoodFilter,
  } = useContext(RecipesContext);

  const { setFilterData, setCategory } = useContext(FilterContext);

  useEffect(() => {
    async function fetchAllFoodsAndCategories() {
      const foods = await callFoodsApi.fetchAll();
      setFoodData(foods);
      const categories = await callFoodsApi.fetchCategories();
      setFilterData(categories);
    }
    fetchAllFoodsAndCategories();
    setCategory('All');
  }, [setFoodData, setFilterData, setCategory]);

  useEffect(() => {
    async function fetchByCategory() {
      const foods = await callFoodsApi.fetchByCategory(selectedFoodFilter);
      setFoodData(foods);
    }
    fetchByCategory();
  }, [setFoodData, selectedFoodFilter]);

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header title="Foods" showSearchBar />
      <Categories type="food" />
      {/* <FoodsList /> */}
      <Footer />
    </Container>
  );
}

export default Foods;
