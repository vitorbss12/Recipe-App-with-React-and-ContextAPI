import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FoodsContext from '../../context/FoodsContext';
import DrinksContext from '../../context/DrinksContext';
import FilterContext from '../../context/FilterContext';
import fetchFoodsBySearch from '../../hooks-utils/Foods-fetch/fetchFoodsBySearch';
import fetchDrinksBySearch from '../../hooks-utils/Drinks-fetch/fetchDrinksBySearch';

function SearchBar({ title }) {
  const {
    searchType,
    setSearchType,
    searchInput,
    setSearchInput,
  } = useContext(FilterContext);
  const { setFoodData } = useContext(FoodsContext);
  const { setDrinkData } = useContext(DrinksContext);

  const handleSearch = async () => {
    if (title === 'Foods') {
      const foods = await fetchFoodsBySearch(searchType, searchInput);
      if (foods) {
        setFoodData(foods);
      }
    }
    if (title === 'Drinks') {
      const drinks = await fetchDrinksBySearch(searchType, searchInput);
      if (drinks) {
        setDrinkData(drinks);
      }
    }
    setSearchInput('');
  };

  return (
    <Container>
      <Row>
        <Col>
          <input
            type="text"
            value={ searchInput }
            placeholder={ `Search by ${searchType}` }
            onChange={ ({ target }) => setSearchInput(target.value) }
          />
          <Button
            type="button"
            bsPrefix="search-btn"
            onClick={ () => handleSearch() }
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        <label htmlFor="name">
          <input
            type="radio"
            name="search-type"
            value="Name"
            id="name"
            checked={ searchType === 'Name' }
            onChange={ ({ target }) => setSearchType(target.value) }
          />
          Name
        </label>
        <label htmlFor="ingredient">
          <input
            type="radio"
            name="search-type"
            value="Ingredient"
            id="ingredient"
            onChange={ ({ target }) => setSearchType(target.value) }
          />
          Ingredient
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            name="search-type"
            value="First letter"
            id="first-letter"
            onChange={ ({ target }) => setSearchType(target.value) }
          />
          First Letter
        </label>
      </Row>
    </Container>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchBar;
