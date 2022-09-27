async function fetchCategories() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

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

export default fetchCategories;
