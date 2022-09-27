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
              key={ index }
              img={ `https://www.thecocktaildb.com/images/ingredients/${recipe.strIngredient1}.png` }
              name={ recipe.strIngredient1 }
            />)
        ))}
    </Container>
  );
}

IngredientsFoodsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default IngredientsFoodsList;
