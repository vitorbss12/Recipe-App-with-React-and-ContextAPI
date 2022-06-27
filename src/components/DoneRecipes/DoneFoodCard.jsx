import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShareButton from '../RecipeDetails/ShareButton';

function DoneFoodCard({ recipe, index }) {
  const [tags, setTags] = useState([]);
  const [tagGet, setTagGet] = useState(false);
  const imageStyle = {
    width: '100%',
    padding: '10px',
  };

  console.log(recipe.tags);

  useEffect(() => {
    if (recipe.tags.includes(',')) {
      setTags(recipe.tags.split(','));
      setTagGet(true);
    } else {
      setTags(recipe.tags);
      setTagGet(true);
    }
  }, [recipe.tags]);

  // useEffect(() => {
  //   console.log(tags);
  //   console.log(tags.length);
  // }, [tags]);

  return (
    <div key={ recipe.name }>
      <img
        src={ recipe.image }
        alt={ recipe.name }
        data-testid={ `${index}-horizontal-image` }
        style={ imageStyle }
      />
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${recipe.nationality} - ${recipe.category}` }
      </p>
      <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        { `Done in: ${recipe.doneDate}` }
      </p>
      <ShareButton datatest={ `${index}-horizontal-share-btn` } />
      {tagGet && tags.length > 0
        ? (tags.map((tag) => (
          <p
            key={ tag }
            data-testid={ `${index}-${tag}-horizontal-tag` }
          >
            { tag }
          </p>
        ))) : (
          <p data-testid={ `${index}-${recipe.tags}-horizontal-tag` }>{ recipe.tags }</p>
        )}
    </div>
  );
}

DoneFoodCard.propTypes = {
  recipe: PropTypes.shape({
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

// Invalid prop `recipe.tags` of type `array` supplied to `DoneFoodCard`, expected `string`
