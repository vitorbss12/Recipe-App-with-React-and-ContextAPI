import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import getIngredients from '../../utils/getIngredients';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import FilterContext from '../../contexts/Filters/FilterContext';
import './InProgressIngredients.css';

function RecipeInProgressIngredients({ option, id }) {
  const { currentDrink, currentFood } = useContext(RecipesContext);
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
  const ingredients = getIngredients(currentRecipe);

  useEffect(() => {
    const pastLocalStore = JSON
      .parse(localStorage.getItem('inProgressRecipes')) || null;
    if (pastLocalStore
      && Object.keys(pastLocalStore).includes(key)) {
      setCurrentIngredients(pastLocalStore[key][id] || []);
    }
  }, [key, id]);

  useEffect(() => {
    if (option === 'drinks') {
      setCurrentRecipe(currentDrink);
      setKey('cocktails');
    }
    if (option === 'foods') {
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

  const inputCheck = (ingredient) => currentIngredients.includes(ingredient);

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
    setCurrentId(option === 'foods' ? 'idMeal' : 'idDrink');
    setCurrentName(option === 'foods' ? 'strMeal' : 'strDrink');
    setCurrentImg(option === 'foods' ? 'strMealThumb' : 'strDrinkThumb');
    setCurrentTags(option === 'foods' ? getTags() : '');
  }, [option, currentRecipe]);

  useEffect(() => {
    if (doneRecipe) {
      const currentAlcoholicOrNot = option === 'foods' ? '' : currentRecipe.strAlcoholic;
      const strArea = option === 'foods' ? currentRecipe.strArea : '';
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
    <Container fluid="xxl">
      <h6 className="pl-4">Ingredients:</h6>
      <Row className="d-flex flex-column flex-wrap pl-2 m-0">
        {
          ingredients.map((ingredient, index) => (
            <Col key={ index } className="d-flex align-items-center">
              <label
                htmlFor={ `${index}-ingredient-step` }
                className={
                  currentIngredients.includes(ingredient)
                    ? 'check-container text-marked mb-1 ml-4'
                    : 'check-container mb-1 ml-4'
                }
              >
                <input
                  type="checkbox"
                  id={ `${index}-ingredient-step` }
                  checked={ inputCheck(ingredient) }
                  className="mr-2 input-ingredients"
                  onChange={ () => getCurrentIngredients(ingredient) }
                />
                {ingredient}
                <span className="checkmark ml-2 mr-2" />
              </label>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

RecipeInProgressIngredients.propTypes = {
  option: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RecipeInProgressIngredients;
