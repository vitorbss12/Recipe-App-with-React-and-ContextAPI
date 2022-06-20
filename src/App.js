import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
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

function App() {
  return (
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
