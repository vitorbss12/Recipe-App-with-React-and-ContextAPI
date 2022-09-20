import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DrinksContext from '../../context/DrinksContext';
import FilterContext from '../../context/FilterContext';
import Categories from '../../components/Categories/Categories';
import DrinkList from '../../components/RecipesList/DrinksList';
import fetchAllDrinks from '../../hooks-utils/Drinks-fetch/fetchAllDrinks';
import fetchDrinksByCategory from '../../hooks-utils/Drinks-fetch/fetchDrinksByCategory';
import fetchDrinksCategories from '../../hooks-utils/Drinks-fetch/fetchDrinksCategories';

function Drinks() {
  const { setDrinkData, selectedDrinkFilter } = useContext(DrinksContext);

  const { setFilterData, setCategory } = useContext(FilterContext);

  useEffect(() => {
    async function fetchAllDrinksAndCategories() {
      const drinks = await fetchAllDrinks();
      setDrinkData(drinks);
      const categories = await fetchDrinksCategories();
      setFilterData(categories);
    }
    fetchAllDrinksAndCategories();
    setCategory('All');
  }, [setDrinkData, setFilterData, setCategory]);

  useEffect(() => {
    async function fetchByCategory() {
      const drinks = await fetchDrinksByCategory(selectedDrinkFilter);
      setDrinkData(drinks);
    }
    fetchByCategory();
  }, [setDrinkData, selectedDrinkFilter]);

  return (
    <div>
      <Header title="Drinks" showSearchBar />
      <Categories type="drink" />
      <DrinkList />
      <Footer />
    </div>
  );
}

export default Drinks;
