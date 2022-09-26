import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function RecommendationCard({ option, recipe }) {
  let recipeName = 'unknown';
  let recipeImg = 'unknown';

  if (option === 'foods') {
    recipeName = recipe.strMeal;
    recipeImg = recipe.strMealThumb;
  }
  if (option === 'drinks') {
    recipeName = recipe.strDrink;
    recipeImg = recipe.strDrinkThumb;
  }

  return (
    <Card className="recommendation-card">
      <Card.Img
        variant="top"
        src={ recipeImg }
      />
      <Card.Body>
        <Card.Title>
          { recipeName }
        </Card.Title>
      </Card.Body>
    </Card>
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
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }),
  option: PropTypes.string,
};

export default RecommendationCard;
