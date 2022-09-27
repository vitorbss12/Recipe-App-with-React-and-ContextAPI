import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './contexts/Recipes/RecipesProvider';
import FilterProvider from './contexts/Filters/FilterProvider';
import Login from './pages/Login/Login';
import './App.css';
import FoodsHome from './pages/Homes/FoodsHome';
import DrinksHome from './pages/Homes/DrinksHome';
import FoodRecipeDetail from './pages/RecipeDetails/FoodRecipeDetail';
import DrinkRecipeDetail from './pages/RecipeDetails/DrinkRecipeDetail';
import inProgressFoodRecipe from './pages/InProgress/InProgressFoodRecipe';
import inProgressDrinkRecipe from './pages/InProgress/InProgressDrinkRecipe';
import Explore from './pages/Explore/Explore';
import ExploreFoods from './pages/ExploreRecipes/ExploreFoods';
import ExploreIngredientsFoods from './pages/ExploreIngredients/ExploreIngredientsFoods';
import ExploreNationalitiesFoods
from './pages/ExploreNationalities/ExploreNationalitiesFoods';
import ExploreDrinks from './pages/ExploreRecipes/ExploreDrinks';
import ExploreIngredientsDrinks
from './pages/ExploreIngredients/ExploreIngredientsDrinks';
import Profile from './pages/Profile/Profile';
import DoneRecipes from './pages/DoneRecipes/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes/FavoriteRecipes';

function App() {
  return (
    <FilterProvider>
      <RecipesProvider>
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />
          <Route
            exact
            path="/foods"
            component={ FoodsHome }
          />
          <Route
            exact
            path="/drinks"
            component={ DrinksHome }
          />
          <Route
            exact
            path="/foods/:id"
            component={ FoodRecipeDetail }
          />
          <Route
            exact
            path="/drinks/:id"
            component={ DrinkRecipeDetail }
          />
          <Route
            exact
            path="/foods/:id/in-progress"
            component={ inProgressFoodRecipe }
          />
          <Route
            exact
            path="/drinks/:id/in-progress"
            component={ inProgressDrinkRecipe }
          />
          <Route
            exact
            path="/explore"
            component={ Explore }
          />
          <Route
            exact
            path="/explore/foods"
            component={ ExploreFoods }
          />
          <Route
            exact
            path="/explore/drinks"
            component={ ExploreDrinks }
          />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreIngredientsFoods }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreIngredientsDrinks }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreNationalitiesFoods }
          />
          <Route
            exact
            path="/profile"
            component={ Profile }
          />
          <Route
            exact
            path="/done-recipes"
            component={ DoneRecipes }
          />
          <Route
            exact
            path="/favorite-recipes"
            component={ FavoriteRecipes }
          />
        </Switch>
      </RecipesProvider>
    </FilterProvider>

  );
}

export default App;
