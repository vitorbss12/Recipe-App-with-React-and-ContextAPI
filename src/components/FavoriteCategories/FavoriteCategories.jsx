import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function FavoriteCategories({ handleClick }) {
  return (
    <Row className="d-flex justify-content-center align-items-center mt-3 mb-3">
      <Button
        variant="primary"
        name="all"
        className="ml-2 mr-2 border-0 rounded"
        bsPrefix="default-btn"
        onClick={ handleClick }
      >
        All
      </Button>
      <Button
        variant="primary"
        name="foods"
        className="ml-2 mr-2 border-0 rounded"
        bsPrefix="default-btn"
        onClick={ handleClick }
      >
        Foods
      </Button>
      <Button
        variant="primary"
        name="drinks"
        className="ml-2 mr-2 border-0 rounded"
        bsPrefix="default-btn"
        onClick={ handleClick }
      >
        Drinks
      </Button>
    </Row>
  );
}

FavoriteCategories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default FavoriteCategories;
