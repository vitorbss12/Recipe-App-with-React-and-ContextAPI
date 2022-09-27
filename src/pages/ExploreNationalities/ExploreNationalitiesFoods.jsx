import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import FilterContext from '../../contexts/Filters/FilterContext';
import fetchByNationality from '../../utils/Foods/fetchByNationality';
import fetchNationalities from '../../utils/Foods/fetchNationalities';
import NationalitiesFoodList
from '../../components/NationalitiesFoodList/NationalitiesFoodList';
import FoodsLists from '../../components/RecipesList/FoodsList';

function ExploreNationalitiesFoods() {
  const [allNationalities, setAllNationalities] = useState([]);
  const [filterNationalities, setFilterNationalities] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const { setFoodData } = useContext(RecipesContext);
  const { filterByNationality, setFilterByNationality } = useContext(FilterContext);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchNationalities();
      setAllNationalities(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    if (searchInput === '') {
      setFilterNationalities(allNationalities);
    } else {
      const nationalities = allNationalities.filter((national) => (
        national.strArea.toLowerCase().includes(searchInput.toLowerCase())
      ));
      setFilterNationalities(nationalities);
    }
  }, [searchInput, allNationalities]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchByNationality(filterByNationality);
      setFoodData(data);
    };
    fetch();
  }, [filterByNationality, setFoodData]);

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header title="Nationalities" recipeDetails />
      { !filterByNationality ? (
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
          <NationalitiesFoodList nationalities={ filterNationalities } />
        </>
      ) : (
        <>
          <Row className="mt-3 mb-3 m-0">
            <Col className="d-flex justify-content-center align-items-stretch">
              <Button
                type="button"
                bsPrefix="header-footer-btn"
                className="border-0 rounded"
                onClick={ () => setFilterByNationality(null) }
              >
                Voltar
              </Button>
            </Col>
          </Row>
          <FoodsLists />
        </>
      )}
      <Footer />
    </Container>
  );
}

export default ExploreNationalitiesFoods;
