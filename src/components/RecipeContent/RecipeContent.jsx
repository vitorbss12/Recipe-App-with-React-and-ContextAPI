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
  const { loading, setLoading, currentFood, currentDrink } = useContext(RecipesContext);
  const [ingredients, setIngredients] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});

  useEffect(() => {
    if (option === 'foods') {
      setCurrentRecipe(currentFood);
    } else {
      setCurrentRecipe(currentDrink);
    }
    if (currentRecipe) {
      setLoading(false);
      setIngredients(getIngredients(currentRecipe));
    }
  }, [currentFood, currentDrink, currentRecipe, setLoading, option]);

  return (
    <Container fluid="xxl" className="overflow-auto">
      { !loading ? (
        <>
          <RecipeDetailsTop
            option={ option }
            title={ option === 'foods' ? currentRecipe.strMeal : currentRecipe.strDrink }
            category={
              option === 'foods' ? currentRecipe.strCategory : currentRecipe.strCategory
            }
            image={
              option === 'foods'
                ? currentRecipe.strMealThumb : currentRecipe.strDrinkThumb
            }
            foodId={ id }
          />
          <RecipeIngredients ingredients={ ingredients } />
          <RecipeInstructions instructions={ currentRecipe.strInstructions } />
          {/* <RecipeVideo name={ currentFood.strMeal } url={ currentFood.strYoutube } /> */}
          <Recommendations option={ option === 'foods' ? 'drinks' : 'foods' } />
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
