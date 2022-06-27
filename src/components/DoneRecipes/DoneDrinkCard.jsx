import React from 'react';
import PropTypes from 'prop-types';
import ShareButton from '../RecipeDetails/ShareButton';

function DoneDrinkCard({ recipe, index }) {
  const imageStyle = {
    width: '100%',
    padding: '10px',
  };

  // useEffect(() => {
  //   console.log(tags);
  //   console.log(tags.length);
  // }, [tags]);

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
        { `${recipe.category} - ${recipe.alcoholicOrNot}` }
      </p>
      <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        { `Done in: ${recipe.doneDate}` }
      </p>
      <ShareButton datatest={ `${index}-horizontal-share-btn` } />
    </div>
  );
}

DoneDrinkCard.defaultProps = {
  recipe: {
    tags: '',
  },
};

DoneDrinkCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};

export default DoneDrinkCard;
