async function fetchFoodsCategories() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    if (meals) {
      return meals;
    }
  } catch (error) {
    console.log(error);
  }
}

export default fetchFoodsCategories;
