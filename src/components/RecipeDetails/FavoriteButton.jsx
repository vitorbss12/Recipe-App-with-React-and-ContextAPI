import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useGetFavoritesRecipe from '../../hooks/useGetFavoritesRecipes';
import WhiteFavoriteButtonImg from '../../images/whiteHeartIcon.svg';
import BlackFavoriteButtonImg from '../../images/blackHeartIcon.svg';

function ShareButton({ id }) {
  const [favoriteImage, setFavoriteImage] = useState(WhiteFavoriteButtonImg);
  const buttonStyle = {
    margin: '5px',
    width: '40px',
    fill: 'red',
  };

  const favoriteRecipe = useGetFavoritesRecipe(id);

  useEffect(() => {
    if (favoriteRecipe) {
      setFavoriteImage(BlackFavoriteButtonImg);
    }
  }, [favoriteRecipe]);

  function handleClick(e) {
    e.preventDefault();
    setFavoriteImage(
      favoriteImage === WhiteFavoriteButtonImg
        ? BlackFavoriteButtonImg : WhiteFavoriteButtonImg,
    );
  }

  return (
    <div>
      <input
        type="image"
        src={ favoriteImage }
        alt="Favorite"
        data-testid="favorite-btn"
        style={ buttonStyle }
        onClick={ handleClick }
      />
    </div>
  );
}

ShareButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ShareButton;
