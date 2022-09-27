async function fetchRandomRecipe() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    if (drinks) {
      return drinks;
    }
  } catch (error) {
    console.log(error);
  }
}

export default fetchRandomRecipe;
