import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import ShareButton from '../RecipeDetails/ShareButton';
import FavoriteButton from '../RecipeDetails/FavoriteButton';

function FavoriteFoodCard({ recipe, index }) {
  const history = useHistory();
  const imageStyle = {
    width: '100%',
    padding: '10px',
  };

  return (
    <div key={ recipe.name }>
      <input
        type="image"
        src={ recipe.image }
        alt={ recipe.name }
        data-testid={ `${index}-horizontal-image` }
        style={ imageStyle }
        onClick={ () => { history.push(`/foods/${recipe.id}`); } }
      />
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${recipe.nationality} - ${recipe.category}` }
      </p>
      {/* <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p> */}
      <Link
        data-testid={ `${index}-horizontal-name` }
        to={ `/foods/${recipe.id}` }
      >
        { recipe.name }
      </Link>
      <ShareButton
        datatest={ `${index}-horizontal-share-btn` }
        url={ `/foods/${recipe.id}` }
      />
      <FavoriteButton
        option="food"
        id={ recipe.id }
        datatest={ `${index}-horizontal-favorite-btn` }
      />
    </div>
  );
}

FavoriteFoodCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoriteFoodCard;
