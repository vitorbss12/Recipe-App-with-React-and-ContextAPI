import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import fetchRandomRecipe from '../../utils/Drinks/fetchRandomRecipe';

function ExploreDrinks() {
  const history = useHistory();

  const handleSurpriseMe = async () => {
    const [drink] = await fetchRandomRecipe();
    history.push(`/Recipe-App-with-React-and-ContextAPI/drinks/${drink.idDrink}`);
  };

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header title="Drinks" recipeDetails />
      <Container className="d-flex flex-column align-items-center">
        <Row className="d-flex flex-column">
          <Button
            className="mt-2 mb-2 border-0 rounded"
            bsPrefix="default-btn"
            type="button"
            onClick={ () => history.push(
              '/Recipe-App-with-React-and-ContextAPI/explore/drinks/ingredients',
            ) }
          >
            By Ingredient
          </Button>
          <Button
            className="mt-2 mb-2 border-0 rounded"
            bsPrefix="default-btn"
            type="button"
            onClick={ handleSurpriseMe }
          >
            Surprise me!
          </Button>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default ExploreDrinks;
