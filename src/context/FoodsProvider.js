import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import FoodsContext from './FoodsContext';

function FoodsProvider({ children }) {
  const [searchType, setSearchType] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [foodData, setFoodData] = useState([]);
  const [currentFood, setCurrentFood] = useState([]);
  const [foodsRecommendations, setFoodsRecommendations] = useState([]);
  const [filterFoodsData, setFilterFoodsData] = useState([]);
  const [selectedFoodFilter, setSelectedFoodFilter] = useState('');

  const alertMessage = 'Sorry, we haven\'t found any recipes for these filters.';

  // faz o fetch da busca pela search bar
  const fetchFoods = async (typeSearch, inputSearch) => {
    try {
      switch (typeSearch) {
      case 'Ingredient': {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputSearch}`);
        const foodsData = await response.json();
        if (foodsData.meals) {
          setFoodData(foodsData.meals);
        } global.alert(alertMessage);
        break;
      }
      case 'Name': {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`);
        const foodsData = await response.json();
        if (foodsData.meals) {
          setFoodData(foodsData.meals);
        } global.alert(alertMessage);
        break;
      }
      case 'First letter': {
        if (inputSearch.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        } else {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearch}`);
          const foodsData = await response.json();
          if (foodsData.meals) {
            setFoodData(foodsData.meals);
          } global.alert(alertMessage);
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

  // carrega as receitas assim que a tela carrega
  const fetchFoodsAPI = useCallback(async (url) => {
    try {
      console.log(url);
      const response = await fetch(url);
      const foodsData = await response.json();
      if (foodsData.meals) {
        setFoodData(foodsData.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // faz o fetch dos filtros
  const fetchFilters = useCallback(async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      if (data.meals) {
        setFilterFoodsData(data.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const foodsContextValue = {
    searchType,
    setSearchType,
    fetchFoods,
    searchInput,
    setSearchInput,
    foodData,
    setFoodData,
    currentFood,
    setCurrentFood,
    foodsRecommendations,
    setFoodsRecommendations,
    fetchFoodsAPI,
    fetchFilters,
    filterFoodsData,
    setFilterFoodsData,
    selectedFoodFilter,
    setSelectedFoodFilter,
  };

  return (
    <FoodsContext.Provider value={ foodsContextValue }>
      { children }
    </FoodsContext.Provider>
  );
}

FoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodsProvider;
