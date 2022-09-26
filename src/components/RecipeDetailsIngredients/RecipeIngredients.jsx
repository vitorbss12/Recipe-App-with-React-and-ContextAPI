import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RecipeIngredients({ ingredients }) {
  return (
    <Container fluid="xxl">
      <h6 className="pl-4">Ingredients:</h6>
      <Row className="d-flex flex-column flex-wrap pl-2 m-0">
        {
          ingredients.map((ingredient, index) => (
            <Col
              key={ index }
            >
              <li>
                { ingredient }
              </li>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

RecipeIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeIngredients;
