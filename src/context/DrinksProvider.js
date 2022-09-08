import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [drinkData, setDrinkData] = useState([]);
  const [currentDrink, setCurrentDrink] = useState([]);
  const [drinksRecommendations, setDrinksRecommendations] = useState([]);
  const [selectedDrinkFilter, setSelectedDrinkFilter] = useState('');

  const drinksContextValue = {
    drinkData,
    setDrinkData,
    currentDrink,
    setCurrentDrink,
    drinksRecommendations,
    setDrinksRecommendations,
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
