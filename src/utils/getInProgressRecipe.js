function getInProgressRecipe(option, id) {
  const storageInProgressRecipes = localStorage.getItem('inProgressRecipes');
  if (storageInProgressRecipes) {
    const inProgressRecipes = JSON.parse(storageInProgressRecipes);
    if (option === 'foods' && inProgressRecipes.meals) {
      return Object.keys(inProgressRecipes.meals)
        .some((recipe) => Number(recipe) === id);
    }
    if (option === 'drinks' && inProgressRecipes.cocktails) {
      return Object.keys(inProgressRecipes.cocktails)
        .some((recipe) => Number(recipe) === id);
    }
  }
  return false;
}

export default getInProgressRecipe;
