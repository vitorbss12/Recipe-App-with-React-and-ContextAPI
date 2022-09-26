import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import getFavoritesRecipe from '../../utils/getFavoritesRecipes';
import WhiteFavoriteButtonImg from '../../images/whiteHeartIcon.svg';
import BlackFavoriteButtonImg from '../../images/blackHeartIcon.svg';
import FilterContext from '../../contexts/Filters/FilterContext';

function FavoriteButton({ recipe }) {
  const [favoriteImage, setFavoriteImage] = useState(WhiteFavoriteButtonImg);
  const favoriteRecipe = getFavoritesRecipe(Number(recipe.id));
  const [favorite, setFavorite] = useState(favoriteRecipe);
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
    if (favorite && !favoriteRecipe) {
      const newRecipe = {
        id: recipe.id,
        type: recipe.type,
        nationality: recipe.nationality,
        category: recipe.category,
        alcoholicOrNot: recipe.alcoholicOrNot,
        name: recipe.name,
        image: recipe.image,
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
          .filter((item) => Number(item.id) !== Number(recipe.id));
        setFavoriteRecipes(newLocalStore);
        setFavoriteImage(WhiteFavoriteButtonImg);
      }
      if (pastLocalStore && pastLocalStore.length === 0) {
        localStorage.removeItem('favoriteRecipes');
        setFavoriteRecipes([]);
      }
    }
  }, [favorite, favoriteRecipe, recipe.id, recipe.type,
    recipe.category, recipe.alcoholicOrNot, recipe.name, recipe.image,
    recipe.nationality, setFavoriteRecipes]);

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
    />
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteButton;
