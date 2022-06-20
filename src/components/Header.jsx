import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header({ title, showBtn }) {
  return (
    <div>
      <img
        data-testid="profile-top-btn"
        alt="imagem do avatar de perfil"
        src={ profileIcon }
      />
      <h1 data-testid="page-title">
        {title}
      </h1>
      {showBtn && (
        <img
          src={ searchIcon }
          alt="imagem do botão de busca"
          data-testid="search-top-btn"
        />
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
