import React from 'react';
import PropTypes from 'prop-types';

function RecommendationCard({ option, recipe, index }) {
  return (
    <li
      data-testid={ `${index}-recomendation-card` }
    >
      {
        option === 'food' ? <p>{recipe.strMeal}</p> : <p>{recipe.strDrink}</p>
      }
    </li>
  );
}

RecommendationCard.defaultProps = {
  recipe: {},
};

RecommendationCard.propTypes = {
  recipe: PropTypes.shape({
    strDrink: PropTypes.string,
    strMeal: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
};

export default RecommendationCard;
