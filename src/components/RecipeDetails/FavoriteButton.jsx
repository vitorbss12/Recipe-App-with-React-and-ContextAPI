import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useGetFavoritesRecipe from '../../hooks/useGetFavoritesRecipes';
import WhiteFavoriteButtonImg from '../../images/whiteHeartIcon.svg';
import BlackFavoriteButtonImg from '../../images/blackHeartIcon.svg';
// import DrinksContext from '../../context/DrinksContext';
// import FoodsContext from '../../context/FoodsContext';

// function saveRecipe(option) {
//   if (option === 'drink') {
//     console.log(option);
//   }
// }

function ShareButton({ option, id }) {
  console.log(option);
  const [favoriteImage, setFavoriteImage] = useState(WhiteFavoriteButtonImg);
  const favoriteRecipe = useGetFavoritesRecipe(id);
  const [favorite, setFavorite] = useState(favoriteRecipe);
  console.log(favorite);
  // const [currentRecipe, setCurrentRecipe] = useState(null);
  // const { currentDrink } = useContext(DrinksContext);
  // const { currentFood } = useContext(FoodsContext);

  // useEffect(() => {
  //   if (option === 'drink') {
  //     setCurrentRecipe(currentDrink);
  //   }
  //   if (option === 'food') {
  //     setCurrentRecipe(currentFood);
  //   }
  // }, [currentDrink, currentFood, option]);

  const buttonStyle = {
    margin: '5px',
    width: '40px',
    fill: 'red',
  };

  useEffect(() => {
    if (favoriteRecipe) {
      setFavoriteImage(BlackFavoriteButtonImg);
    }
  }, [favoriteRecipe]);

  function handleClick(e) {
    e.preventDefault();
    setFavorite(
      favoriteImage === WhiteFavoriteButtonImg,
    );
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
  option: PropTypes.string.isRequired,
};

export default ShareButton;
