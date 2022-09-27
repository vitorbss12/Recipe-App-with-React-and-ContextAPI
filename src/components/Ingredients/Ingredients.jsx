import React from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import RecipeIngredients from '../RecipeDetailsIngredients/RecipeIngredients';
import RecipeInProgressIngredients
from '../InProgressIngredients/InProgressIngredients';

function Ingredients({ option, page, id, ingredients }) {
  return (
    <Container
      className="m-0 p-0"
    >
      { page === 'in-progress' ? (
        <RecipeInProgressIngredients
          option={ option }
          id={ id }
        />
      ) : (
        <RecipeIngredients ingredients={ ingredients } />
      )}
    </Container>
  );
}

Ingredients.propTypes = {
  option: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
