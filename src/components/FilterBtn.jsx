import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import FoodsContext from '../context/FoodsContext';
import DrinksContext from '../context/DrinksContext';
import FilterContext from '../context/FilterContext';
// t

function FilterBtn({ name }) {
  const { setSelectedFoodFilter } = useContext(FoodsContext);
  const { setSelectedDrinkFilter } = useContext(DrinksContext);
  const { filterData } = useContext(FilterContext);
  const [clicked, setClicked] = useState(false);

  const foodFilters = filterData.map((filter) => filter.strCategory);
  const drinkFilters = filterData.map((filter) => filter.strCategory);

  useEffect(() => {
    console.log(clicked);
    if (!clicked) {
      setSelectedDrinkFilter('All');
      setSelectedFoodFilter('All');
    }
  }, [clicked, setSelectedFoodFilter, setSelectedDrinkFilter]);

  const handleClick = (selectedFilter) => {
    setClicked(!clicked);
    console.log(selectedFilter);
    if (drinkFilters.includes(selectedFilter)) {
      setSelectedDrinkFilter(selectedFilter);
    }
    if (foodFilters.includes(selectedFilter)) {
      setSelectedFoodFilter(selectedFilter);
    }
  };

  return (
    <div>
      <button
        data-testid={ `${name}-category-filter` }
        type="button"
        onClick={ () => handleClick(name) }
      >
        {name}
      </button>
    </div>
  );
}

FilterBtn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FilterBtn;
