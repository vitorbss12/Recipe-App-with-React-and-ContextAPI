function useGetFavoriteRecipe(id) {
  const storageFavoriteRecipes = localStorage.getItem('favoriteRecipes');
  if (storageFavoriteRecipes) {
    const favoriteRecipes = JSON.parse(storageFavoriteRecipes);
    return favoriteRecipes.some((recipe) => Number(recipe.id) === id);
  }
  return false;
}

export default useGetFavoriteRecipe;
