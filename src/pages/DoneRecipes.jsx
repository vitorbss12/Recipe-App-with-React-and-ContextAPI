import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import DoneFoodCard from '../components/DoneRecipes/DoneFoodCard';
import DoneDrinkCard from '../components/DoneRecipes/DoneDrinkCard';

function DoneRecipes() {
  const [filter, setFilter] = useState('all');
  const [currentRecipes, setCurrentRecipes] = useState([]);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
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
      <Header title="Done Recipes" />
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
      {
        currentRecipes.map((recipe, index) => (
          recipe.type === 'food' ? (
            <DoneFoodCard
              key={ recipe.name }
              recipe={ recipe }
              index={ index }
            />
          ) : (
            <DoneDrinkCard
              key={ recipe.name }
              recipe={ recipe }
              index={ index }
            />
          )
        ))
      }
    </div>
  );
}

export default DoneRecipes;
