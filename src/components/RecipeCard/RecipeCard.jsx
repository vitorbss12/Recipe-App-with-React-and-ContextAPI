import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import '../../styles/components/RecipeCard.css';

function RecipeCard({ id, img, name, option, urlId }) {
  const history = useHistory();

  const handleClick = (url) => {
    if (option === 'food') {
      history.push(`/foods/${url}`);
    }
    if (option === 'drink') {
      history.push(`/drinks/${url}`);
    }
  };

  return (
    <Card
      className="recipe-card"
      onClick={ () => handleClick(urlId) }
    >
      <Card.Img
        src={ img }
        alt={ `${name}` }
        variant="top"
      />
      <Card.Title data-testid={ `${id}-card-name` }>{ name }</Card.Title>
    </Card>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  urlId: PropTypes.string.isRequired,
};

export default RecipeCard;
