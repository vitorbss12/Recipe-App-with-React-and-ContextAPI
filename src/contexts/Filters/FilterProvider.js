import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [searchType, setSearchType] = useState('Name');
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('All');

  const [filterData, setFilterData] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const lastLocalStore = JSON.parse(localStorage.getItem('favoriteRecipes')) || null;
  const [favoriteRecipes, setFavoriteRecipes] = useState(lastLocalStore);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const [filterByIngredient, setFilterByIngredient] = useState(null);

  // carrega as receitas assim que a tela carrega

  // faz o fetch dos filtros
  const fetchFilters = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.meals) {
        setFilterData(data.meals);
      }
      if (data.drinks) {
        setFilterData(data.drinks);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const FilterContextValue = {
    fetchFilters,
    filterData,
    setFilterData,
    doneRecipes,
    setDoneRecipes,
    disabledBtn,
    setDisabledBtn,
    favoriteRecipes,
    setFavoriteRecipes,
    searchType,
    setSearchType,
    searchInput,
    setSearchInput,
    category,
    setCategory,
    filterByIngredient,
    setFilterByIngredient,
  };

  return (
    <FilterContext.Provider value={ FilterContextValue }>
      { children }
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterProvider;
