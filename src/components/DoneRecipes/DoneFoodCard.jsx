import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import ShareButton from '../RecipeDetails/ShareButton';

function DoneFoodCard({ recipe, index }) {
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
      <Link
        data-testid={ `${index}-horizontal-name` }
        to={ `/foods/${recipe.id}` }
      >
        { recipe.name }
      </Link>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        { `Done in: ${recipe.doneDate}` }
      </p>
      <ShareButton
        datatest={ `${index}-horizontal-share-btn` }
        url={ `/foods/${recipe.id}` }
      />
      {recipe.tags.length > 0
        && (recipe.tags.map((tag) => (
          <p
            key={ tag }
            data-testid={ `${index}-${tag}-horizontal-tag` }
          >
            { tag }
          </p>
        )))}
    </div>
  );
}

DoneFoodCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    nationality: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneFoodCard;
