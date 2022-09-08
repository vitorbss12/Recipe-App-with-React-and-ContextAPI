import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FoodsContext from '../../context/FoodsContext';
import DrinksContext from '../../context/DrinksContext';

function SearchBar({ title }) {
  const { searchType,
    setSearchType,
    fetchFoods,
    searchInput,
    setSearchInput,
    foodData,
    setFoodData } = useContext(FoodsContext);

  const { drinkData, setDrinkData, fetchDrinks } = useContext(DrinksContext);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (foodData && foodData.length === 1) {
      history.push(`${location.pathname}/${foodData[0].idMeal}`);
    }
    if (drinkData && drinkData.length === 1) {
      history.push(`${location.pathname}/${drinkData[0].idDrink}`);
    }
  }, [foodData, setFoodData, drinkData, setDrinkData, history, location]);

  return (
    <Container>
      <Row md="auto">
        <Col className="d-flex justify-content-start mb-2">
          <input
            type="text"
            className="search-input"
            value={ searchInput }
            placeholder={ `Search by ${searchType}` }
            onChange={ ({ target }) => setSearchInput(target.value) }
          />
          <Button
            type="button"
            bsPrefix="search-btn"
            onClick={ () => {
              if (title === 'Foods') {
                fetchFoods(searchType, searchInput);
                setSearchInput('');
              }
              if (title === 'Drinks') {
                fetchDrinks(searchType, searchInput);
                setSearchInput('');
              }
            } }
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row md="auto" className="d-flex justify-content-center align-self-center p-0">
        <label className="search-radio-label" htmlFor="name">
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
        <label className="search-radio-label" htmlFor="ingredient">
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
        <label className="search-radio-label" htmlFor="first-letter">
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
