import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

function RecipeInstructions({ instructions }) {
  return (
    <Container fluid="xxl">
      <h6 className="pl-4 mt-3">Instructions:</h6>
      <p className="text-justify pl-3 pr-3">{ instructions }</p>
    </Container>
  );
}

RecipeInstructions.defaultProps = {
  instructions: 'Loading...',
};

RecipeInstructions.propTypes = {
  instructions: PropTypes.string,
};

export default RecipeInstructions;
