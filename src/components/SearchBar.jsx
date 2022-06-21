import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import FoodsContext from '../context/FoodsContext';
import DrinksContext from '../context/DrinksContext';

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
    if (foodData.length === 1) {
      history.push(`${location.pathname}/${foodData[0].idMeal}`);
      setFoodData([]);
    }
  }, [foodData, history, location, setFoodData]);

  useEffect(() => {
    if (drinkData.length === 1) {
      history.push(`${location.pathname}/${drinkData[0].idDrink}`);
      setDrinkData([]);
    }
  }, [drinkData, setDrinkData, history, location]);

  const alertMessage = 'Sorry, we haven\'t found any recipes for these filters.';

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        value={ searchInput }
        placeholder="Search Recipe"
        onChange={ ({ target }) => setSearchInput(target.value) }
      />
      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          name="search-type"
          value="Ingredient"
          id="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          type="radio"
          name="search-type"
          value="Name"
          id="name"
          data-testid="name-search-radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
      </label>
      <label htmlFor="first-letter">
        First Letter
        <input
          type="radio"
          name="search-type"
          value="First letter"
          id="first-letter"
          data-testid="first-letter-search-radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => {
          if (title === 'Foods') {
            fetchFoods(searchType, searchInput);
            if (foodData.length === 0) {
              global.alert(alertMessage);
            }
            setSearchInput('');
          }
          if (title === 'Drinks') {
            fetchDrinks(searchType, searchInput);
            if (drinkData.length === 0) {
              global.alert(alertMessage);
            }
            setSearchInput('');
          }
        } }
      >
        Search
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchBar;
