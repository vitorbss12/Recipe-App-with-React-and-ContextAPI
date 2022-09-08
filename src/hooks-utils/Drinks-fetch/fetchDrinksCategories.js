async function fetchDrinksCategories() {
  const url = 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=list';

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

export default fetchDrinksCategories;
