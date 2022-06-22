import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinksContext from '../context/DrinksContext';
import RecipeCard from '../components/RecipeCard';

function Drinks() {
  const RECIPES_PER_VISUALIZATION = 12;

  const { drinkData, fetchOnLoad } = useContext(DrinksContext);

  useEffect(() => {
    fetchOnLoad();
  }, [fetchOnLoad]);

  return (
    <div>
      <Header title="Drinks" showBtn />
      <Footer />
      { drinkData.length > 1 && (
        drinkData.map((recipe, index) => (
          index < RECIPES_PER_VISUALIZATION && (
            <RecipeCard
              id={ index }
              img={ recipe.strDrinkThumb }
              name={ recipe.strDrink }
              key={ recipe.idDrink }
            />)))

      ) }
    </div>
  );
}

export default Drinks;
