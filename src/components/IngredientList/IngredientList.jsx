import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useGetIngredients from '../../utils/getIngredients';
import DrinksContext from '../../contexts/Drinks/DrinksContext';
import FoodsContext from '../../contexts/Foods/FoodsContext';
import FilterContext from '../../contexts/Filters/FilterContext';

function IngredientList({ option, id }) {
  const { currentDrink } = useContext(DrinksContext);
  const { currentFood } = useContext(FoodsContext);
  const { setDoneRecipes, setDisabledBtn } = useContext(FilterContext);
  const [currentRecipe, setCurrentRecipe] = useState('');
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setCurrentName] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [currentTags, setCurrentTags] = useState(null);
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [inProgress, setInProgress] = useState(false);
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [key, setKey] = useState('');
  const ingredients = useGetIngredients(currentRecipe);

  useEffect(() => {
    const pastLocalStore = JSON
      .parse(localStorage.getItem('inProgressRecipes')) || null;
    if (pastLocalStore
      && Object.keys(pastLocalStore).includes(key)) {
      setCurrentIngredients(pastLocalStore[key][id] || []);
    }
  }, [key, id]);

  useEffect(() => {
    if (option === 'drink') {
      setCurrentRecipe(currentDrink);
      setKey('cocktails');
    }
    if (option === 'food') {
      setCurrentRecipe(currentFood);
      setKey('meals');
    }
  }, [currentDrink, currentFood, option]);

  useEffect(() => {
    if (currentIngredients.length > 0
      && ingredients.length === currentIngredients.length) {
      setDoneRecipe(true);
      setDisabledBtn(false);
    } else {
      setDoneRecipe(false);
      setDisabledBtn(true);
    }
  }, [ingredients, currentIngredients, setDisabledBtn]);

  useEffect(() => {
    const pastLocalStore = JSON
      .parse(localStorage.getItem('inProgressRecipes')) || {};
    if (inProgress) {
      const newLocalStore = { ...pastLocalStore,
        [key]: { ...pastLocalStore[key], [id]: currentIngredients } };
      if (newLocalStore[key][id].length === 0) {
        delete newLocalStore[key][id];
      }
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocalStore));
    }
  }, [inProgress, key, id, currentIngredients]);

  useEffect(() => {
    if (currentIngredients.length > 0) {
      setInProgress(true);
    } else {
      setInProgress(false);
    }
  }, [currentIngredients]);

  const getCurrentIngredients = (currentIngredient) => {
    if (!currentIngredients.includes(currentIngredient)) {
      setCurrentIngredients([...currentIngredients, currentIngredient]);
    }
    if (currentIngredients.includes(currentIngredient)) {
      setCurrentIngredients(currentIngredients
        .filter((ingred) => ingred !== currentIngredient));
    }
  };

  const labelStyle = (ingredient) => {
    const normalStyle = {
      margin: '5px',
      width: '100%',
    };
    const markedStyle = {
      margin: '5px',
      width: '100%',
      textDecoration: 'line-through',
    };
    if (currentIngredients.includes(ingredient)) {
      return markedStyle;
    }
    return normalStyle;
  };

  const inputCheck = (ingredient) => {
    if (currentIngredients.includes(ingredient)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const getTags = () => {
      let tags = [];
      if (currentRecipe.strTags) {
        if (currentRecipe.strTags.includes(',')) {
          tags = currentRecipe.strTags.split(',');
        } else {
          tags = [currentRecipe.strTags];
        }
      }
      return tags;
    };
    setCurrentId(option === 'food' ? 'idMeal' : 'idDrink');
    setCurrentName(option === 'food' ? 'strMeal' : 'strDrink');
    setCurrentImg(option === 'food' ? 'strMealThumb' : 'strDrinkThumb');
    setCurrentTags(option === 'food' ? getTags() : '');
  }, [option, currentRecipe]);

  useEffect(() => {
    if (doneRecipe) {
      const currentAlcoholicOrNot = option === 'food' ? '' : currentRecipe.strAlcoholic;
      const strArea = option === 'food' ? currentRecipe.strArea : '';
      const newRecipe = {
        id: currentRecipe[currentId],
        type: option,
        nationality: strArea,
        category: currentRecipe.strCategory,
        alcoholicOrNot: currentAlcoholicOrNot,
        name: currentRecipe[currentName],
        image: currentRecipe[currentImg],
        doneDate: new Date().toLocaleDateString(),
        tags: currentTags,
        url: window.location.href,
      };
      const pastLocalStore = JSON.parse(localStorage.getItem('doneRecipes')) || [];
      const newLocalStore = [...pastLocalStore, newRecipe];
      setDoneRecipes(newLocalStore);
    }
    if (!doneRecipe) {
      const pastLocalStore = JSON.parse(localStorage.getItem('doneRecipes')) || null;
      if (pastLocalStore) {
        const newLocalStore = pastLocalStore.filter((item) => Number(item.id) !== id);
        localStorage.setItem('doneRecipes', JSON.stringify(newLocalStore));
        setDoneRecipes(newLocalStore);
      }
      if (pastLocalStore && pastLocalStore.length === 0) {
        localStorage.removeItem('doneRecipes');
        setDoneRecipes([]);
      }
    }
  }, [doneRecipe, setDoneRecipes, id, option,
    currentRecipe, currentId, currentName, currentImg, currentTags]);

  return (
    <div>
      {
        ingredients.map((ingredient, index) => (
          <label
            key={ index }
            htmlFor={ `${index}-ingredient-step` }
            data-testid={ `${index}-ingredient-step` }
            style={ labelStyle(ingredient) }
            onChange={ () => getCurrentIngredients(ingredient) }
          >
            <input
              type="checkbox"
              id={ `${index}-ingredient-step` }
              // onChange={ handleChange }
              checked={ inputCheck(ingredient) }
            />
            {ingredient}
          </label>
        ))
      }
    </div>
  );
}

IngredientList.propTypes = {
  option: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default IngredientList;
