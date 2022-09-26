import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShareButton from '../ShareButton/ShareButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function FavoriteFoodCard({ recipe }) {
  const history = useHistory();

  return (
    <Container
      fluid="xxl"
      key={ recipe.name }
      className="d-flex flex-row justify-content-center align-items-center mb-3"
    >
      <Col className="d-flex justify-content-end m-0">
        <input
          type="image"
          src={ recipe.image }
          alt={ recipe.name }
          className="w-75 rounded"
          onClick={ () => { history.push(`/foods/${recipe.id}`); } }
        />
      </Col>
      <Col className="d-flex flex-column">
        <Row>
          <p className="mb-0">
            { `${recipe.nationality} - ${recipe.category}` }
          </p>
        </Row>
        <Row>
          <Link
            to={ `/foods/${recipe.id}` }
            className="mb-2"
          >
            { recipe.name }
          </Link>
        </Row>
        <Row className="d-flex justify-content-start align-items-start">
          <ShareButton
            url={ `/foods/${recipe.id}` }
          />
          <FavoriteButton
            recipe={ recipe }
          />
        </Row>
      </Col>
    </Container>
  );
}

FavoriteFoodCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteFoodCard;
