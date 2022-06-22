import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';

function RecommendationCard({ option, recipe, index }) {
  let recipeName = 'unknown';
  let recipeImg = 'unknown';
  console.log(index);

  if (option === 'foods') {
    recipeName = recipe.strMeal;
    recipeImg = recipe.strMealThumb;
  }
  if (option === 'drinks') {
    recipeName = recipe.strDrink;
    recipeImg = recipe.strDrinkThumb;
  }

  const cardStyle = {
    padding: '5px',
  };

  const imgStyle = {
    width: '145px',
  };

  // const recommendationStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  // };

  return (
    // <img
    //   className="d-block w-50"
    //   src={ recipeImg }
    //   alt={ recipeName }
    //   style={ imgStyle }
    //   data-testid={ `${index}-recommendation-photo` }
    // />
    // <Carousel>
    //   <Carousel.Item>
    <Card style={ cardStyle }>
      <Card.Img
        variant="top"
        src={ recipeImg }
        style={ imgStyle }
      />
      <Card.Body>
        <Card.Title
          data-testid={ `${index}-recomendation-title` }
        >
          { recipeName }
        </Card.Title>
      </Card.Body>
    </Card>
    //   </Carousel.Item>
    // </Carousel>
    // <div style={ cardStyle }>
    //   <div style={ recommendationStyle }>
    //     <img src={ recipeImg } alt={ recipeName } style={ imgStyle } />
    //     <p
    //       data-testid={ `${index}-recomendation-card` }
    //     >
    //       {recipeName}
    //     </p>
    //   </div>
    // </div>
  );
}

RecommendationCard.defaultProps = {
  recipe: {},
  option: null,
};

RecommendationCard.propTypes = {
  recipe: PropTypes.shape({
    strDrink: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
  option: PropTypes.string,
};

export default RecommendationCard;
