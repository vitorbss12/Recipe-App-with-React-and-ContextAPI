import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DrinksContext from '../../context/DrinksContext';
import FilterContext from '../../context/FilterContext';
import Categories from '../../components/Filters/Categories';
import fetchAllDrinks from '../../hooks-utils/Drinks-fetch/fetchAllDrinks';
import fetchDrinksByCategory from '../../hooks-utils/Drinks-fetch/fetchDrinksByCategory';
import fetchDrinksCategories from '../../hooks-utils/Drinks-fetch/fetchDrinksCategories';

function Drinks() {
  const { setDrinkData, selectedDrinkFilter } = useContext(DrinksContext);
  const history = useHistory();

  const { setFilterData } = useContext(FilterContext);

  useEffect(() => {
    async function fetchAllDrinksAndCategories() {
      const drinks = await fetchAllDrinks();
      setDrinkData(drinks);
      const categories = await fetchDrinksCategories();
      setFilterData(categories);
    }
    fetchAllDrinksAndCategories();
    history.push('/drinks#All');
  }, [setDrinkData, setFilterData, history]);

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
      {/* <DrinkList /> */}
      <Footer />
    </div>
  );
}

export default Drinks;
