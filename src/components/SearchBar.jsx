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
    console.log(drinkData, foodData);
    if (foodData && foodData.length === 1) {
      history.push(`${location.pathname}/${foodData[0].idMeal}`);
    }
    if (drinkData && drinkData.length === 1) {
      history.push(`${location.pathname}/${drinkData[0].idDrink}`);
    }
  }, [foodData, history, location, drinkData, setDrinkData, setFoodData]);

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search Recipe"
        onChange={ ({ target }) => setSearchInput(target.value) }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="search-type"
          value="Ingredient"
          id="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          name="search-type"
          value="Name"
          id="name"
          data-testid="name-search-radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          name="search-type"
          value="First letter"
          id="first-letter"
          data-testid="first-letter-search-radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => {
          if (title === 'Foods') {
            fetchFoods(searchType, searchInput);
          }
          if (title === 'Drinks') {
            fetchDrinks(searchType, searchInput);
          }
          console.log('cliquei');
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
