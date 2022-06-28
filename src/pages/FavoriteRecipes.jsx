import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import FavoriteFoodCard from '../components/FavoriteRecipes/FavoriteFoodCard';
import FavoriteDrinkCard from '../components/FavoriteRecipes/FavoriteDrinkCard';

function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  const [currentRecipes, setCurrentRecipes] = useState([]);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (filter !== 'all') {
      const recipes = doneRecipes.filter((recipe) => recipe.type === filter);
      setCurrentRecipes(recipes);
    } else {
      setCurrentRecipes(doneRecipes);
    }
  }, [filter]);

  useEffect(() => {
    console.log(currentRecipes);
  }, [currentRecipes]);

  const handleClick = ({ target }) => {
    setFilter(target.name);
  };

  return (
    <div>
      <Header title="Favorite Recipes" />
      <Button
        variant="primary"
        data-testid="filter-by-all-btn"
        name="all"
        onClick={ handleClick }
      >
        All
      </Button>
      <Button
        variant="primary"
        data-testid="filter-by-food-btn"
        name="food"
        onClick={ handleClick }
      >
        Foods
      </Button>
      <Button
        variant="primary"
        data-testid="filter-by-drink-btn"
        name="drink"
        onClick={ handleClick }
      >
        Drinks
      </Button>
      { currentRecipes
        && currentRecipes.map((recipe, index) => (
          recipe.type === 'food' ? (
            <FavoriteFoodCard
              key={ recipe.name }
              recipe={ recipe }
              index={ index }
            />
          ) : (
            <FavoriteDrinkCard
              key={ recipe.name }
              recipe={ recipe }
              index={ index }
            />
          )
        ))}
    </div>
  );
}

export default FavoriteRecipes;
