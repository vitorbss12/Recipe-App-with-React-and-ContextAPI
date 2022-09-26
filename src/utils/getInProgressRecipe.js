function getInProgressRecipe(option, id) {
  const storageInProgressRecipes = localStorage.getItem('inProgressRecipes');
  if (storageInProgressRecipes) {
    const inProgressRecipes = JSON.parse(storageInProgressRecipes);
    if (option === 'food' && inProgressRecipes.meals) {
      return Object.keys(inProgressRecipes.meals)
        .some((recipe) => Number(recipe) === id);
    }
    if (option === 'drink' && inProgressRecipes.cocktails) {
      return Object.keys(inProgressRecipes.cocktails)
        .some((recipe) => Number(recipe) === id);
    }
  }
  return false;
}

export default getInProgressRecipe;
