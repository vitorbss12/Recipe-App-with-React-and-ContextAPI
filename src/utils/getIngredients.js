const TWENTY_NUMBER = 20;

function getIngredients(currentFood) {
  const ingredients = [];
  for (let i = 1; i <= TWENTY_NUMBER; i += 1) {
    if (currentFood[`strIngredient${i}`]) {
      const ingredient = `strIngredient${i}`;
      const measure = `strMeasure${i}`;
      ingredients
        .push(`${currentFood[ingredient]} - ${currentFood[measure]}`);
    }
  }
  return ingredients;
}

export default getIngredients;
