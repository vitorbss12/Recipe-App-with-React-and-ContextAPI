async function fetchNationalities() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    if (meals) {
      console.log(meals);
      return meals;
    }
  } catch (error) {
    console.log(error);
  }
}

export default fetchNationalities;
