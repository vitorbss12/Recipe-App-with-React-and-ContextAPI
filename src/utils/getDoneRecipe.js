function getDoneRecipe(id) {
  const storageDoneRecipes = localStorage.getItem('doneRecipes');
  if (storageDoneRecipes) {
    const doneRecipes = JSON.parse(storageDoneRecipes);
    return doneRecipes.some((recipe) => Number(recipe.id) === id);
  }
  return false;
}

export default getDoneRecipe;
