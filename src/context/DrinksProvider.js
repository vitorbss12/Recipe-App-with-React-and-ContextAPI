import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [drinkData, setDrinkData] = useState([]);
  const [currentDrink, setCurrentDrink] = useState([]);
  const [drinksRecommendations, setDrinksRecommendations] = useState([]);

  const alertMessage = 'Sorry, we haven\'t found any recipes for these filters.';

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
          console.log('ESQUEÇA TUDO');
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

  const fetchOnLoad = useCallback(async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const drinksData = await response.json();
      if (drinksData.drinks) {
        setDrinkData(drinksData.drinks);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const drinksContextValue = {
    fetchDrinks,
    drinkData,
    setDrinkData,
    currentDrink,
    setCurrentDrink,
    drinksRecommendations,
    setDrinksRecommendations,
    fetchOnLoad,
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
