import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Foods from './pages/Homes/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreIngredientsDrinks from './pages/ExploreIngredientsDrinks';
import ExploreIngredientsFoods from './pages/ExploreIngredientsFoods';
import ExploreNationalitiesFoods from './pages/ExploreNationalitiesFoods';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DrinkRecipeDetail from './pages/DrinkRecipeDetail';
import FoodRecipeDetail from './pages/FoodRecipeDetail';
import inProgressFoodRecipe from './pages/InProgressFoodRecipe';
import inProgressDrinkRecipe from './pages/InProgressDrinkRecipe';
import FoodsProvider from './context/FoodsProvider';
import DrinksProvider from './context/DrinksProvider';
import FilterProvider from './context/FilterProvider';

function App() {
  return (
    <FilterProvider>
      <FoodsProvider>
        <DrinksProvider>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/foods" component={ Foods } />
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
            />
          </Switch>
        </DrinksProvider>

      </FoodsProvider>
    </FilterProvider>

  );
}

export default App;
