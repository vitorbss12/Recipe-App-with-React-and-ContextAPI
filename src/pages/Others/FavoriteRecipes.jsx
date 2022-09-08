import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header';
import FavoriteFoodCard from '../../components/FavoriteRecipes/FavoriteFoodCard';
import FavoriteDrinkCard from '../../components/FavoriteRecipes/FavoriteDrinkCard';
import FilterContext from '../../context/FilterContext';

function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  const [currentRecipes, setCurrentRecipes] = useState([]);
  const { favoriteRecipes } = useContext(FilterContext);

  useEffect(() => {
    if (filter !== 'all') {
      const recipes = favoriteRecipes.filter((recipe) => recipe.type === filter);
      setCurrentRecipes(recipes);
    } else {
      setCurrentRecipes(favoriteRecipes);
    }
  }, [filter, favoriteRecipes]);

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
