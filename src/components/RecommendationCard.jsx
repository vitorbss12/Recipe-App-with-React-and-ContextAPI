import React from 'react';
import PropTypes from 'prop-types';

function RecommendationCard({ option, recipe, index }) {
  let recipeName = 'unknown';

  if (option === 'foods') {
    recipeName = recipe.strMeal;
  }
  if (option === 'drinks') {
    recipeName = recipe.strDrink;
  }

  return (
    <li
      data-testid={ `${index}-recomendation-card` }
    >
      {recipeName}
    </li>
  );
}

RecommendationCard.defaultProps = {
  recipe: {},
  option: null,
};

RecommendationCard.propTypes = {
  recipe: PropTypes.shape({
    strDrink: PropTypes.string,
    strMeal: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
  option: PropTypes.string,
};

export default RecommendationCard;
