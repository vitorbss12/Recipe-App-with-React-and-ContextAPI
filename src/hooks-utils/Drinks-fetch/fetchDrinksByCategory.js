async function fetchDrinksByCategory(category) {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;

  if (category === 'All') {
    url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  }

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

export default fetchDrinksByCategory;
