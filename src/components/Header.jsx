import React from 'react';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header() {
  return (
    <div>
      <img
        src={ profileIcon }
        alt="imagem do avatar de perfil"
        data-testid="profile-top-btn"
      />
      <h1 data-testid="page-title">
        Foods
      </h1>
      <img
        src={ searchIcon }
        alt="imagem do botão de busca"
        data-testid="search-top-btn"
      />
    </div>
  );
}

export default Header;
