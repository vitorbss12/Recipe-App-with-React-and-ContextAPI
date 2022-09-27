import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ img, name, option, urlId }) {
  const history = useHistory();

  const handleClick = (url) => {
    if (option === 'food') {
      history.push(`/Recipe-App-with-React-and-ContextAPI/foods/${url}`);
    }
    if (option === 'drink') {
      history.push(`/Recipe-App-with-React-and-ContextAPI/drinks/${url}`);
    }
  };

  return (
    <Card
      className="recipe-card align-self-stretch"
      onClick={ () => handleClick(urlId) }
    >
      <Card.Img
        src={ img }
        alt={ `${name}` }
        variant="top"
        className="rounded"
      />
      <Card.Title>{ name }</Card.Title>
    </Card>
  );
}

RecipeCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  urlId: PropTypes.string.isRequired,
};

export default RecipeCard;
