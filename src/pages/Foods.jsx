import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodsContext from '../context/FoodsContext';
import RecipeCard from '../components/RecipeCard';

function Foods() {
  const RECIPES_PER_VISUALIZATION = 12;
  const { foodData, fetchOnLoad } = useContext(FoodsContext);

  useEffect(() => { console.log(foodData); }, [foodData]);

  useEffect(() => {
    fetchOnLoad();
  }, [fetchOnLoad]);

  return (
    <div>
      <Header title="Foods" showBtn />
      <Footer />
      {/* {isFirstSearch && foodData.length === 0 && (
        global.alert('Sorry, we haven"t found any recipes for these filters.')
      )} */}
      { foodData.length > 1 && (
        foodData.map((recipe, index) => (
          index < RECIPES_PER_VISUALIZATION && (
            <RecipeCard
              id={ index }
              img={ recipe.strMealThumb }
              imgAlt={ recipe.strMeal }
              name={ recipe.strMeal }
              key={ recipe.idMeal }
            />)
        ))
      ) }
    </div>
  );
}

export default Foods;
