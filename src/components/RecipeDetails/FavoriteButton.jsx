import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import useGetFavoritesRecipe from '../../hooks/useGetFavoritesRecipes';
import WhiteFavoriteButtonImg from '../../images/whiteHeartIcon.svg';
import BlackFavoriteButtonImg from '../../images/blackHeartIcon.svg';
import DrinksContext from '../../context/DrinksContext';
import FoodsContext from '../../context/FoodsContext';

function FavoriteButton({ option, id, datatest }) {
  const [favoriteImage, setFavoriteImage] = useState(WhiteFavoriteButtonImg);
  const favoriteRecipe = useGetFavoritesRecipe(id);
  const [favorite, setFavorite] = useState(favoriteRecipe);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setCurrentName] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const { currentDrink } = useContext(DrinksContext);
  const { currentFood } = useContext(FoodsContext);

  useEffect(() => {
    if (favoriteRecipe) {
      setFavoriteImage(BlackFavoriteButtonImg);
    }
    if (!favoriteRecipe) {
      setFavoriteImage(WhiteFavoriteButtonImg);
    }
  }, [favoriteRecipe]);

  useEffect(() => {
    if (option === 'drink') {
      setCurrentRecipe(currentDrink);
    }
    if (option === 'food') {
      setCurrentRecipe(currentFood);
    }
  }, [currentDrink, currentFood, option]);

  const buttonStyle = {
    margin: '5px',
    width: '40px',
    fill: 'red',
  };

  useEffect(() => {
    setCurrentId(option === 'food' ? 'idMeal' : 'idDrink');
    setCurrentName(option === 'food' ? 'strMeal' : 'strDrink');
    setCurrentImg(option === 'food' ? 'strMealThumb' : 'strDrinkThumb');
  }, [option]);

  useEffect(() => {
    if (favorite && !favoriteRecipe) {
      const currentAlcoholicOrNot = option === 'food' ? '' : currentRecipe.strAlcoholic;
      const strArea = option === 'food' ? currentRecipe.strArea : '';
      const newRecipe = {
        id: currentRecipe[currentId],
        type: option,
        nationality: strArea,
        category: currentRecipe.strCategory,
        alcoholicOrNot: currentAlcoholicOrNot,
        name: currentRecipe[currentName],
        image: currentRecipe[currentImg],
      };
      const pastLocalStore = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      const newLocalStore = [...pastLocalStore, newRecipe];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newLocalStore));
    }
    if (!favorite) {
      const pastLocalStore = JSON.parse(localStorage.getItem('favoriteRecipes')) || null;
      if (pastLocalStore) {
        const newLocalStore = pastLocalStore.filter((item) => Number(item.id) !== id);
        localStorage.setItem('favoriteRecipes', JSON.stringify(newLocalStore));
      }
      if (pastLocalStore && pastLocalStore.length === 0) {
        localStorage.removeItem('favoriteRecipes');
      }
    }
  }, [favorite, favoriteRecipe,
    currentRecipe, currentId, currentImg, currentName, option, id]);

  function handleClick() {
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
        data-testid={ datatest }
        style={ buttonStyle }
        onClick={ handleClick }
      />
    </div>
  );
}

FavoriteButton.defaultProps = {
  datatest: 'favorite-btn',
};

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
  datatest: PropTypes.string,
};

export default FavoriteButton;
