async function fetchByIngredient(ingredient) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    console.log(drinks);
    if (drinks) {
      return drinks;
    }
  } catch (error) {
    console.log('entrei');
    console.log(error);
  }
}

export default fetchByIngredient;
