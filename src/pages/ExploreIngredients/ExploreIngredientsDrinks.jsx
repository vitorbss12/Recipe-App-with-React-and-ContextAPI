import React, { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import fetchIngredients from '../../utils/Drinks/fetchIngredients';
import fetchByIngredients from '../../utils/Drinks/fetchByIngredients';
import IngredientsDrinksList
from '../../components/IngredientsList/IngredientsDrinksList';
import FilterContext from '../../contexts/Filters/FilterContext';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import DrinksLists from '../../components/RecipesList/DrinksList';

function ExploreIngredientsDrinks() {
  const [allIngredients, setAllIngredients] = useState([]);
  const [filterIngredients, setFilterIngredients] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const { setDrinkData } = useContext(RecipesContext);
  const { filterByIngredient, setFilterByIngredient } = useContext(FilterContext);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchIngredients();
      setAllIngredients(data);
    };
    fetch();
    setFilterByIngredient(null);
  }, [setFilterByIngredient]);

  useEffect(() => {
    if (searchInput === '') {
      setFilterIngredients(allIngredients);
    } else {
      const ingredients = allIngredients.filter((ingredient) => (
        ingredient.strIngredient.toLowerCase().includes(searchInput.toLowerCase())
      ));
      setFilterIngredients(ingredients);
    }
  }, [searchInput, allIngredients]);

  useEffect(() => {
    const fetch = async () => {
      if (filterByIngredient) {
        const data = await fetchByIngredients(filterByIngredient);
        setDrinkData(data);
      }
    };
    fetch();
  }, [filterByIngredient, setDrinkData]);

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header title="Ingredients" recipeDetails />
      { !filterByIngredient ? (
        <>
          <Row className="mt-3 mb-3 m-0">
            <Col className="d-flex justify-content-between align-items-stretch">
              <input
                type="text"
                className="flex-fill ml-2 pl-3 border rounded-left search-input"
                value={ searchInput }
                placeholder="Search by ingredients"
                onChange={ ({ target }) => setSearchInput(target.value) }
              />
              <Button
                type="button"
                bsPrefix="header-footer-btn"
                className="border-0 rounded-right"
              >
                Search
              </Button>
            </Col>
          </Row>
          <IngredientsDrinksList ingredients={ filterIngredients } />
        </>
      ) : (
        <>
          <Row className="mt-3 mb-3 m-0">
            <Col className="d-flex justify-content-center align-items-stretch">
              <Button
                type="button"
                bsPrefix="header-footer-btn"
                className="border-0 rounded"
                onClick={ () => setFilterByIngredient(null) }
              >
                Voltar
              </Button>
            </Col>
          </Row>
          <DrinksLists />
        </>
      )}
      <Footer />
    </Container>
  );
}

export default ExploreIngredientsDrinks;
