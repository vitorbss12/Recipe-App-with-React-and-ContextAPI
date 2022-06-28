import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [filterData, setFilterData] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const lastLocalStore = JSON.parse(localStorage.getItem('favoriteRecipes')) || null;
  const [favoriteRecipes, setFavoriteRecipes] = useState(lastLocalStore);
  const [disabledBtn, setDisabledBtn] = useState(true);
  console.log(favoriteRecipes);

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
