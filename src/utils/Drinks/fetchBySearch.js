async function fetchBySearch(type, input) {
  const alertMessage = 'No results found. Please try again.';

  try {
    switch (type) {
    case 'Ingredient': {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`);
      const { drinks } = await response.json();
      if (drinks) {
        return drinks;
      }
      global.alert(alertMessage);
      break;
    }
    case 'Name': {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
      const { drinks } = await response.json();
      if (drinks) {
        return drinks;
      }
      global.alert(alertMessage);
      break;
    }
    case 'First letter': {
      if (input.length > 1 || input.length === 0) {
        return global.alert('Your search must have only 1 (one) character');
      }
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`);
      const { drinks } = await response.json();
      if (drinks) {
        return drinks;
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

export default fetchBySearch;
