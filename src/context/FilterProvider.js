import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FoodsProvider({ children }) {
  const [filterData, setFilterData] = useState([]);

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
  };

  return (
    <FilterContext.Provider value={ FilterContextValue }>
      { children }
    </FilterContext.Provider>
  );
}

FoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodsProvider;
