import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import useGetFavoritesRecipe from '../../hooks/useGetFavoritesRecipes';
import WhiteFavoriteButtonImg from '../../images/whiteHeartIcon.svg';
import BlackFavoriteButtonImg from '../../images/blackHeartIcon.svg';
import FilterContext from '../../context/FilterContext';

function FavoriteButton({ recipe, datatest }) {
  const [favoriteImage, setFavoriteImage] = useState(WhiteFavoriteButtonImg);
  const favoriteRecipe = useGetFavoritesRecipe(Number(recipe.id));
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

  const buttonStyle = {
    margin: '5px',
    width: '40px',
    fill: 'red',
  };

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
      console.log('1');
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
        console.log('2');
      }
      if (pastLocalStore && pastLocalStore.length === 0) {
        localStorage.removeItem('favoriteRecipes');
        setFavoriteRecipes([]);
        console.log('3');
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
  datatest: PropTypes.string.isRequired,
};

export default FavoriteButton;
