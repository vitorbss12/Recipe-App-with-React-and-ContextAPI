import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShareButton from '../ShareButton/ShareButton';
import FavoriteButton from '../FavoriteButtonInDetails/FavoriteButtonInDetails';

function RecipeDetailsTop({ option, title, category, image, foodId }) {
  return (
    <Container fluid="xxl">
      <Row className="d-flex justify-content-center pl-1 mt-3 mb-3 mr-0 ml-0">
        <img
          src={ image }
          alt={ `Thumbnail of ${title}` }
          className="w-75 img-fluid rounded"
        />
      </Row>
      <Row className="d-flex m-0">
        <Col>
          <h3>
            { title }
          </h3>
        </Col>
      </Row>
      <Row
        className="d-flex m-0"
      >
        <Col className="d-flex justify-content-start align-items-start">
          <h5>
            { category }
          </h5>
        </Col>
        <Col className="d-flex justify-content-end align-items-start">
          <ShareButton />
          <FavoriteButton option={ option } id={ foodId } />
        </Col>
      </Row>
    </Container>
  );
}

RecipeDetailsTop.defaultProps = {
  title: 'Title',
  category: 'Category',
  image: 'Loading...',
  foodId: 0,
};

RecipeDetailsTop.propTypes = {
  option: PropTypes.string.isRequired,
  title: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  foodId: PropTypes.number,
};

export default RecipeDetailsTop;
