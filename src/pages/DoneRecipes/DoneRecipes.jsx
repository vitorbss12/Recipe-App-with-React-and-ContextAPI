import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Header from '../../components/Header/Header';
import FavoriteCategories from '../../components/FavoriteCategories/FavoriteCategories';
import DoneFoodCard from '../../components/DoneRecipes/DoneFoodCard';
import DoneDrinkCard from '../../components/DoneRecipes/DoneDrinkCard';

function DoneRecipes() {
  const [filter, setFilter] = useState('all');
  const [currentRecipes, setCurrentRecipes] = useState([]);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes && filter !== 'all') {
      const recipes = doneRecipes.filter((recipe) => recipe.type === filter);
      setCurrentRecipes(recipes);
    } else {
      setCurrentRecipes(doneRecipes);
    }
  }, [filter]);

  const handleClick = ({ target }) => {
    setFilter(target.name);
  };

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column flex-fill"
    >
      <Header title="Done Recipes" recipeDetails />
      <FavoriteCategories handleClick={ handleClick } />
      <Container
        fluid="xxl"
        className="d-flex flex-column overflow-auto"
      >
        { currentRecipes
          && currentRecipes.map((recipe, index) => (
            recipe.type === 'foods' ? (
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
          ))}
      </Container>
    </Container>
  );
}

export default DoneRecipes;
