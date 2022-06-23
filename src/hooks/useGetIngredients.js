const TWENTY_NUMBER = 20;

function getIngredients(currentFood) {
  const ingredients = [];
  for (let i = 1; i <= TWENTY_NUMBER; i += 1) {
    if (currentFood[`strIngredient${i}`]) {
      ingredients
        .push(`${currentFood[`strIngredient${i}`]} - ${currentFood[`strMeasure${i}`]}`);
    }
  }
  return ingredients;
}

export default getIngredients;
