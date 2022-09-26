import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import useGetFavoritesRecipe from '../../utils/getFavoritesRecipes';
import WhiteFavoriteButtonImg from '../../images/whiteHeartIcon.svg';
import BlackFavoriteButtonImg from '../../images/blackHeartIcon.svg';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import FilterContext from '../../contexts/Filters/FilterContext';

function FavoriteButton({ option, id }) {
  const [favoriteImage, setFavoriteImage] = useState(WhiteFavoriteButtonImg);
  const favoriteRecipe = useGetFavoritesRecipe(id);
  const [favorite, setFavorite] = useState(favoriteRecipe);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setCurrentName] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const { currentDrink, currentFood } = useContext(RecipesContext);
  const { favoriteRecipes, setFavoriteRecipes } = useContext(FilterContext);

  useEffect(() => {
    if (favoriteRecipe) {
      setFavoriteImage(BlackFavoriteButtonImg);
    }
    if (!favoriteRecipe) {
      setFavoriteImage(WhiteFavoriteButtonImg);
    }
  }, [favoriteRecipe]);

  useEffect(() => {
    if (option === 'drinks') {
      setCurrentRecipe(currentDrink);
    }
    if (option === 'foods') {
      setCurrentRecipe(currentFood);
    }
  }, [currentDrink, currentFood, option]);

  useEffect(() => {
    setCurrentId(option === 'foods' ? 'idMeal' : 'idDrink');
    setCurrentName(option === 'foods' ? 'strMeal' : 'strDrink');
    setCurrentImg(option === 'foods' ? 'strMealThumb' : 'strDrinkThumb');
  }, [option]);

  useEffect(() => {
    if (favorite && !favoriteRecipe) {
      const currentAlcoholicOrNot = option === 'foods' ? '' : currentRecipe.strAlcoholic;
      const strArea = option === 'foods' ? currentRecipe.strArea : '';
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
      setFavoriteRecipes(newLocalStore);
      setFavoriteImage(BlackFavoriteButtonImg);
    }
    if (!favorite) {
      const pastLocalStore = JSON.parse(localStorage.getItem('favoriteRecipes')) || null;
      if (pastLocalStore) {
        const newLocalStore = pastLocalStore
          .filter((item) => Number(item.id) !== id);
        setFavoriteRecipes(newLocalStore);
        setFavoriteImage(WhiteFavoriteButtonImg);
      }
      if (pastLocalStore && pastLocalStore.length === 0) {
        localStorage.removeItem('favoriteRecipes');
        setFavoriteRecipes([]);
      }
    }
  }, [favorite, favoriteRecipe,
    currentRecipe, currentId, currentImg, currentName, option, id, setFavoriteRecipes]);

  function handleClick() {
    setFavorite(
      favoriteImage === WhiteFavoriteButtonImg,
    );
    setFavoriteImage(
      favoriteImage === WhiteFavoriteButtonImg
        ? BlackFavoriteButtonImg : WhiteFavoriteButtonImg,
    );
  }

  useEffect(() => {
    if (favoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    }
  }, [favoriteRecipes]);

  return (
    <input
      type="image"
      src={ favoriteImage }
      alt="Favorite"
      onClick={ handleClick }
      className="pl-2 w-25"
    />
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
};

export default FavoriteButton;
