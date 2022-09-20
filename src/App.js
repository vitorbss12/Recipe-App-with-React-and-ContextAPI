import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './contexts/Recipes/RecipesProvider';
import FilterProvider from './contexts/Filters/FilterProvider';
import Login from './pages/Login/Login';
import './App.css';
// import Foods from './pages/Homes/Foods';
// import Drinks from './pages/Homes/Drinks';
// import Explore from './pages/Explore/Explore';
// import ExploreFoods from './pages/Explore/ExploreFoods';
// import ExploreDrinks from './pages/Explore/ExploreDrinks';
// import ExploreIngredientsDrinks from './pages/Explore/ExploreIngredientsDrinks';
// import ExploreIngredientsFoods from './pages/Explore/ExploreIngredientsFoods';
// import ExploreNationalitiesFoods from './pages/Explore/ExploreNationalitiesFoods';
// import Profile from './pages/Profile/Profile';
// import DoneRecipes from './pages/Others/DoneRecipes';
// import FavoriteRecipes from './pages/Others/FavoriteRecipes';
// import DrinkRecipeDetail from './pages/Details/DrinkRecipeDetail';
// import FoodRecipeDetail from './pages/Details/FoodRecipeDetail';
// import inProgressFoodRecipe from './pages/InProgress/InProgressFoodRecipe';
// import inProgressDrinkRecipe from './pages/InProgress/InProgressDrinkRecipe';

function App() {
  return (
    <FilterProvider>
      <RecipesProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          {/* <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
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
          /> */}
        </Switch>
      </RecipesProvider>
    </FilterProvider>

  );
}

export default App;
