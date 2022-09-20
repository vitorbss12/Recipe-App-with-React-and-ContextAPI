import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  // Foods
  const [foodData, setFoodData] = useState([]);
  const [currentFood, setCurrentFood] = useState([]);
  const [foodsRecommendations, setFoodsRecommendations] = useState([]);

  const [selectedFoodFilter, setSelectedFoodFilter] = useState('All');

  // Drinks
  const [drinkData, setDrinkData] = useState([]);
  const [currentDrink, setCurrentDrink] = useState([]);
  const [drinksRecommendations, setDrinksRecommendations] = useState([]);

  const [selectedDrinkFilter, setSelectedDrinkFilter] = useState('All');

  const recipesContext = {
    selectedFoodFilter,
    setSelectedFoodFilter,
    foodData,
    setFoodData,
    currentFood,
    setCurrentFood,
    foodsRecommendations,
    setFoodsRecommendations,
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
    <RecipesContext.Provider value={ recipesContext }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
