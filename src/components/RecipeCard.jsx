import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({ id, img, name }) {
  console.log(id);
  return (
    <main>
      <div data-testid={ `${id}-recipe-card` }>
        <img data-testid={ `${id}-card-img` } src={ img } alt={ `${name}` } />
        <h4 data-testid={ `${id}-card-name` }>{ name }</h4>
      </div>
    </main>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default RecipeCard;
