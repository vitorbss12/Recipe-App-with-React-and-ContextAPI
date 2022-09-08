async function fetchFoodsBySearch(type, input) {
  const alertMessage = 'Sinto muito, não encontramos nenhuma receita para essa busca.';

  try {
    switch (type) {
    case 'Ingredient': {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`);
      const { meals } = await response.json();
      if (meals) {
        return meals;
      }
      global.alert(alertMessage);
      break;
    }
    case 'Name': {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
      const { meals } = await response.json();
      if (meals) {
        return meals;
      }
      global.alert(alertMessage);
      break;
    }
    case 'First letter': {
      if (input.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`);
      const { meals } = await response.json();
      if (meals) {
        return meals;
      }
      global.alert(alertMessage);
      break;
    }
    default:
      break;
    }
  } catch (error) {
    console.log(error);
  }
}

export default fetchFoodsBySearch;
