import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import FilterContext from '../../contexts/Filters/FilterContext';
import fetchDrinksBySearch from '../../utils/Drinks/fetchBySearch';
import callFoodsApi from '../../utils/Foods';
import './SearchBar.css';

function SearchBar({ title }) {
  const {
    searchType,
    setSearchType,
    searchInput,
    setSearchInput,
    setCategory,
  } = useContext(FilterContext);
  const { setFoodData, setDrinkData } = useContext(RecipesContext);

  const handleSearch = async () => {
    if (title === 'Foods') {
      const foods = await callFoodsApi.fetchBySearch(searchType, searchInput);
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
    setCategory('All');
  };

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-between align-items-stretch">
          <input
            type="text"
            className="flex-fill ml-2 pl-3 border-0 rounded-left search-input"
            value={ searchInput }
            placeholder={ `Search by ${searchType}` }
            onChange={ ({ target }) => setSearchInput(target.value) }
          />
          <Button
            type="button"
            bsPrefix="header-footer-btn"
            className="border-0 rounded-right"
            onClick={ () => handleSearch() }
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mt-2">
        <label htmlFor="name" className="search-radio-label">
          <input
            className="search-radio"
            type="radio"
            name="search-type"
            value="Name"
            id="name"
            checked={ searchType === 'Name' }
            onChange={ ({ target }) => setSearchType(target.value) }
          />
          Name
        </label>
        <label htmlFor="ingredient" className="search-radio-label">
          <input
            className="search-radio"
            type="radio"
            name="search-type"
            value="Ingredient"
            id="ingredient"
            onChange={ ({ target }) => setSearchType(target.value) }
          />
          Ingredient
        </label>
        <label htmlFor="first-letter" className="search-radio-label">
          <input
            className="search-radio"
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
