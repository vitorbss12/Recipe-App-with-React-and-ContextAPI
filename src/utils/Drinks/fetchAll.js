async function fetchAll() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

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

export default fetchAll;
