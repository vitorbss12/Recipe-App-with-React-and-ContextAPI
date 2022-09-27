import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import IngredientsCard from '../IngredientsCard/IngredientsCard';

function IngredientsFoodsList({ ingredients }) {
  const INGREDIENTS_PER_VISUALIZATION = 20;

  return (
    <Container
      className="overflow-auto d-flex flex-wrap justify-content-center align-items-center"
    >
      { ingredients
        && ingredients.map((recipe, index) => (
          index < INGREDIENTS_PER_VISUALIZATION && (
            <IngredientsCard
              key={ recipe.idIngredient }
              img={ `https://www.themealdb.com/images/ingredients/${recipe.strIngredient}.png` }
              name={ recipe.strIngredient }
            />)
        ))}
    </Container>
  );
}

IngredientsFoodsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default IngredientsFoodsList;
