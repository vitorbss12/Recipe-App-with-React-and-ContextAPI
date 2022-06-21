import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header({ title, showBtn }) {
  const [showSearchInput, setShowSearchInput] = useState(false);

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
          />
          <label htmlFor="ingredient">
            Ingredient
            <input
              type="radio"
              name="search-type"
              value="ingredient"
              data-testid="ingredient-search-radio"
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="radio"
              name="search-type"
              value="name"
              data-testid="name-search-radio"
            />
          </label>
          <label htmlFor="first-letter">
            First Letter
            <input
              type="radio"
              name="search-type"
              value="first-letter"
              data-testid="first-letter-search-radio"
            />
          </label>
          <button
            type="button"
            data-testid="exec-search-btn"
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
