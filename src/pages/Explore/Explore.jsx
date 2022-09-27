import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Explore() {
  const history = useHistory();
  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header title="Explore" recipeDetails />
      <Container className="d-flex flex-column align-items-center">
        <Row className="d-flex flex-column">
          <Button
            type="button"
            className="mt-2 mb-2 border-0 rounded"
            bsPrefix="default-btn"
            onClick={ () => history.push(
              '/Recipe-App-with-React-and-ContextAPI/explore/foods',
            ) }
          >
            Explore Foods
          </Button>
          <Button
            type="button"
            className="mt-2 mb-2 border-0 rounded"
            bsPrefix="default-btn"
            onClick={ () => history.push(
              '/Recipe-App-with-React-and-ContextAPI/explore/drinks',
            ) }
          >
            Explore Drinks
          </Button>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Explore;
