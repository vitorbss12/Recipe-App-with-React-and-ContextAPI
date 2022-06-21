import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [drinkData, setDrinkData] = useState([]);

  const fetchDrinks = async (typeSearch, inputSearch) => {
    try {
      switch (typeSearch) {
      case 'Ingredient': {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputSearch}`);
        const drinksData = await response.json();
        if (drinksData.drinks) {
          setDrinkData(drinksData.drinks);
        }
        break;
      }
      case 'Name': {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch}`);
        const drinksData = await response.json();
        if (drinksData.drinks) {
          setDrinkData(drinksData.drinks);
        }
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
        }
        break;
      }
      default:
        break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const drinksContextValue = {
    fetchDrinks,
    drinkData,
    setDrinkData,
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
