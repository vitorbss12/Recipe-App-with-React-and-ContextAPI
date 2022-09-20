import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function RecommendationCard({ option, recipe, index }) {
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

  const cardStyle = {
    padding: '5px',
  };

  const imgStyle = {
    width: '145px',
  };

  return (
    <Card style={ cardStyle }>
      <Card.Img
        variant="top"
        src={ recipeImg }
        style={ imgStyle }
      />
      <Card.Body>
        <Card.Title
          data-testid={ `${index}-recomendation-title` }
        >
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
  index: PropTypes.number.isRequired,
  option: PropTypes.string,
};

export default RecommendationCard;
