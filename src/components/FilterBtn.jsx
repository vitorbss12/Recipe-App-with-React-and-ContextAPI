import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FoodsContext from '../context/FoodsContext';
import DrinksContext from '../context/DrinksContext';

function FilterBtn({ name }) {
  const { filterFoodsData, setSelectedFoodFilter } = useContext(FoodsContext);
  const { filterDrinksData, setSelectedDrinkFilter } = useContext(DrinksContext);

  const foodFilters = filterFoodsData.map((filter) => filter.strCategory);
  const drinkFilters = filterDrinksData.map((filter) => filter.strCategory);

  const handleClick = (selectedFilter) => {
    if (drinkFilters.includes(selectedFilter)) {
      setSelectedDrinkFilter(selectedFilter);
    }
    if (foodFilters.includes(selectedFilter)) {
      setSelectedFoodFilter(selectedFilter);
    }
  };

  return (
    <div data-testid={ `${name}-category-filter` }>
      <button
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
