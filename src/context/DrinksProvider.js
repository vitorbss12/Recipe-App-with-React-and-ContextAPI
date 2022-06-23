import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [drinkData, setDrinkData] = useState([]);
  const [currentDrink, setCurrentDrink] = useState([]);
  const [drinksRecommendations, setDrinksRecommendations] = useState([]);
  const [filterDrinksData, setFilterDrinksData] = useState([]);
  const [selectedDrinkFilter, setSelectedDrinkFilter] = useState('');

  const alertMessage = 'Sorry, we haven\'t found any recipes for these filters.';

  // faz o fetch da busca pela search bar
  const fetchDrinks = async (typeSearch, inputSearch) => {
    try {
      switch (typeSearch) {
      case 'Ingredient': {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputSearch}`);
        const drinksData = await response.json();
        if (drinksData.drinks) {
          setDrinkData(drinksData.drinks);
        } global.alert(alertMessage);
        break;
      }
      case 'Name': {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch}`);
        const drinksData = await response.json();
        if (drinksData.drinks) {
          setDrinkData(drinksData.drinks);
        } global.alert(alertMessage);
        break;
      }
      case 'First letter': {
        console.log(inputSearch);
        if (inputSearch.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        }
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputSearch}`);
        const drinksData = await response.json();
        if (drinksData.drinks) {
          setDrinkData(drinksData.drinks);
        } global.alert(alertMessage);
        break;
      }
      default:
        break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // carrega as receitas assim que a tela carrega e faz o fetch de acordo com filtro
  const fetchDrinksAPI = useCallback(async (url) => {
    try {
      console.log(url);
      const response = await fetch(url);
      const drinksData = await response.json();
      if (drinksData.drinks) {
        setDrinkData(drinksData.drinks);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // faz o fetch dos filtros
  const fetchFilters = useCallback(async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      if (data.drinks) {
        setFilterDrinksData(data.drinks);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // faz o fetch de acordo com o filtro

  const drinksContextValue = {
    fetchDrinks,
    drinkData,
    setDrinkData,
    currentDrink,
    setCurrentDrink,
    drinksRecommendations,
    setDrinksRecommendations,
    fetchDrinksAPI,
    fetchFilters,
    filterDrinksData,
    selectedDrinkFilter,
    setSelectedDrinkFilter,
  };

  return (
    <DrinksContext.Provider value={ drinksContextValue }>
      { children }
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
