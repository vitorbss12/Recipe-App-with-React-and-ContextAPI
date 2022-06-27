import React from 'react';
import PropTypes from 'prop-types';
import ShareButton from '../RecipeDetails/ShareButton';

function DoneFoodCard({ recipe, index }) {
  const imageStyle = {
    width: '100%',
    padding: '10px',
  };

  return (
    <div key={ recipe.name }>
      <img
        src={ recipe.image }
        alt={ recipe.name }
        data-testid={ `${index}-horizontal-image` }
        style={ imageStyle }
      />
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${recipe.nationality} - ${recipe.category}` }
      </p>
      <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        { `Done in: ${recipe.doneDate}` }
      </p>
      <ShareButton datatest={ `${index}-horizontal-share-btn` } />
      {recipe.tags.length > 0
        && (recipe.tags.map((tag) => (
          <p
            key={ tag }
            data-testid={ `${index}-${tag}-horizontal-tag` }
          >
            { tag }
          </p>
        )))}
    </div>
  );
}

DoneFoodCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    nationality: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneFoodCard;
