import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import FoodsContext from '../context/FoodsContext';
import DrinksContext from '../context/DrinksContext';

function Header({ title, showBtn }) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const { searchType,
    setSearchType,
    fetchFoods,
    searchInput,
    setSearchInput } = useContext(FoodsContext);

  const { fetchDrinks } = useContext(DrinksContext);

  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        onClick={ () => history.push('/profile') }
      >
        <img
          data-testid="profile-top-btn"
          alt="imagem do avatar de perfil"
          src={ profileIcon }
          type="submit"
        />
      </button>
      <h1 data-testid="page-title">
        {title}
      </h1>
      {showBtn && (
        <button
          type="button"
          onClick={ () => setShowSearchInput(!showSearchInput) }
        >
          <img
            src={ searchIcon }
            alt="imagem do botão de busca"
            data-testid="search-top-btn"
          />
        </button>
      )}
      {showSearchInput && (
        <>
          <input
            type="text"
            data-testid="search-input"
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
              }
              if (title === 'Drinks') {
                fetchDrinks(searchType, searchInput);
              }
            } }
          >
            Search
          </button>
        </>
      )}
    </div>
  );
}

Header.defaultProps = {
  showBtn: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showBtn: PropTypes.bool,
};

export default Header;
