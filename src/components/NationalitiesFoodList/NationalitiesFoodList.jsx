import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import NationalityCard from '../NationalityCard/NationalityCard';

function NationalitiesFoodList({ nationalities }) {
  const NATIONALITY_PER_VISUALIZATION = 20;

  return (
    <Container
      className="overflow-auto d-flex flex-wrap justify-content-center align-items-center"
    >
      { nationalities
        && nationalities.map((recipe, index) => (
          index < NATIONALITY_PER_VISUALIZATION && (
            <NationalityCard
              key={ recipe.strArea }
              name={ recipe.strArea }
            />)
        ))}
    </Container>
  );
}

NationalitiesFoodList.propTypes = {
  nationalities: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default NationalitiesFoodList;
