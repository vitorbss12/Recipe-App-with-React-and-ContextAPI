import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import FilterContext from '../../contexts/Filters/FilterContext';

function RecipeCard({ name, img }) {
  const { setFilterByIngredient } = useContext(FilterContext);

  const handleClick = () => {
    setFilterByIngredient(name);
  };

  return (
    <Card
      className="recipe-card align-self-stretch"
      onClick={ handleClick }
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
};

export default RecipeCard;
