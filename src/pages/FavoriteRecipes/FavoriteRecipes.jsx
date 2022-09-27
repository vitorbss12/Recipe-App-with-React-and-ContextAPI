import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/Header';
import FavoriteFoodCard from '../../components/FavoriteRecipes/FavoriteFoodCard';
import FavoriteDrinkCard from '../../components/FavoriteRecipes/FavoriteDrinkCard';
import FilterContext from '../../contexts/Filters/FilterContext';
import FavoriteCategories from '../../components/FavoriteCategories/FavoriteCategories';

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
    <Container
      fluid="xxl"
      className="d-flex flex-column flex-fill"
    >
      <Header title="Favorites" recipeDetails />
      <FavoriteCategories handleClick={ handleClick } />
      <Container
        fluid="xxl"
        className="d-flex flex-column overflow-auto"
      >
        { currentRecipes
          && currentRecipes.map((recipe, index) => (
            recipe.type === 'foods' ? (
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
      </Container>
    </Container>
  );
}

export default FavoriteRecipes;
