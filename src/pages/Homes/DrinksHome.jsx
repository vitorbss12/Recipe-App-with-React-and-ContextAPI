import React, { useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import FilterContext from '../../contexts/Filters/FilterContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Categories from '../../components/Categories/Categories';
import DrinkList from '../../components/RecipesList/DrinksList';
import callDrinksApi from '../../utils/Drinks';

function Drinks() {
  const {
    setDrinkData,
    selectedDrinkFilter,
  } = useContext(RecipesContext);

  const { setFilterData, setCategory } = useContext(FilterContext);

  useEffect(() => {
    async function fetchAllDrinksAndCategories() {
      const drinks = await callDrinksApi.fetchAll();
      setDrinkData(drinks);
      const categories = await callDrinksApi.fetchCategories();
      setFilterData(categories);
    }
    fetchAllDrinksAndCategories();
    setCategory('All');
  }, [setDrinkData, setFilterData, setCategory]);

  useEffect(() => {
    async function fetchByCategory() {
      const drinks = await callDrinksApi.fetchByCategory(selectedDrinkFilter);
      setDrinkData(drinks);
    }
    fetchByCategory();
  }, [setDrinkData, selectedDrinkFilter]);

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header title="Drinks" showSearchBar />
      <Categories type="drink" />
      <DrinkList />
      <Footer />
    </Container>
  );
}

export default Drinks;
