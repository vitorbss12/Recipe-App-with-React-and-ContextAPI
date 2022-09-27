import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import FilterContext from '../../contexts/Filters/FilterContext';

function RecipeCard({ name }) {
  const { setFilterByNationality } = useContext(FilterContext);

  const handleClick = () => {
    setFilterByNationality(name);
  };

  return (
    <Card
      className="recipe-card align-self-stretch"
      onClick={ handleClick }
    >
      <Card.Title className="pt-0">{ name }</Card.Title>
    </Card>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RecipeCard;
