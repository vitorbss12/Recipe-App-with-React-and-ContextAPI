async function fetchDrinksCategories() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

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
