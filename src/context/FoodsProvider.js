import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodsContext from './FoodsContext';

function FoodsProvider({ children }) {
  const [searchType, setSearchType] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [foodData, setFoodData] = useState([]);

  useEffect(() => { console.log(foodData); }, [foodData]);

  const fetchFoods = async (typeSearch, inputSearch) => {
    try {
      switch (typeSearch) {
      case 'Ingredient': {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputSearch}`);
        const foodsData = await response.json();
        setFoodData(foodsData);
        break;
      }
      case 'Name': {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`);
        const foodsData = await response.json();
        setFoodData(foodsData);
        break;
      }
      case 'First letter': {
        console.log(inputSearch);
        if (inputSearch.length > 1) {
          console.log('ESQUEÇA TUDO');
          global.alert('Your search must have only 1 (one) character');
        }
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearch}`);
        const foodsData = await response.json();
        setFoodData(foodsData);
        break;
      }
      default:
        break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const foodsContextValue = {
    searchType,
    setSearchType,
    fetchFoods,
    searchInput,
    setSearchInput,
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
