function useGetInProgressRecipe(option, id) {
  const storageInProgressRecipes = localStorage.getItem('inProgressRecipes');
  if (storageInProgressRecipes) {
    const inProgressRecipes = JSON.parse(storageInProgressRecipes);
    if (option === 'food') {
      return Object.keys(inProgressRecipes.meals)
        .some((recipe) => Number(recipe) === id);
    }
    if (option === 'drink') {
      return Object.keys(inProgressRecipes.cocktails)
        .some((recipe) => Number(recipe) === id);
    }
  }
  return false;
}

export default useGetInProgressRecipe;
