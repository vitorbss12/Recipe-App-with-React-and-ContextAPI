import React from 'react';
import PropTypes from 'prop-types';

function FilterBtn({ name }) {
  return (
    <div data-testid={ `${name}-category-filter` }>
      <button
        type="button"
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
