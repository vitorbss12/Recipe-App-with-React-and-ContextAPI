import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import getIngredients from '../../utils/getIngredients';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import RecipeDetailsTop from '../RecipeDetailsTop/RecipeDetailsTop';
import RecipeIngredients from '../RecipeDetailsIngredients/RecipeIngredients';
import RecipeInstructions from '../RecipeInstructions/RecipeInstructions';
// import RecipeVideo from '../RecipeVideo/RecipeVideo';
import Recommendations from '../Recommendations/Recommendations';

function RecipeContent({ option, id }) {
  const { loading, setLoading, currentFood } = useContext(RecipesContext);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (currentFood) {
      setLoading(false);
      setIngredients(getIngredients(currentFood));
    }
    console.log(currentFood);
  }, [currentFood, setLoading]);

  return (
    <Container fluid="xxl" className="overflow-auto">
      { !loading ? (
        <>
          <RecipeDetailsTop
            option={ option }
            title={ currentFood.strMeal }
            category={ currentFood.strCategory }
            image={ currentFood.strMealThumb }
            foodId={ id }
          />
          <RecipeIngredients ingredients={ ingredients } />
          <RecipeInstructions instructions={ currentFood.strInstructions } />
          {/* <RecipeVideo name={ currentFood.strMeal } url={ currentFood.strYoutube } /> */}
          <Recommendations option="drinks" />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}

RecipeContent.propTypes = {
  option: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RecipeContent;
