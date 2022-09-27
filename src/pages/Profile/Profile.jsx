import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FilterContext from '../../contexts/Filters/FilterContext';

function Profile() {
  const { favoriteRecipes, doneRecipes } = useContext(FilterContext);

  console.log(doneRecipes);

  const user = JSON.parse(localStorage.getItem('user'));

  const history = useHistory();

  const loginRoute = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Container
      fluid="xxl"
      className="d-flex flex-column justify-content-between flex-fill"
    >
      <Header title="Profile" recipeDetails />
      <Container className="d-flex flex-column align-items-center">
        <Row>
          <p>{ user?.email }</p>
        </Row>
        <Row className="d-flex flex-column">
          <Button
            type="submit"
            className="mt-2 mb-2 border-0 rounded"
            bsPrefix="default-btn"
            onClick={ () => history.push('/done-recipes') }
            disabled={ !doneRecipes || doneRecipes.length === 0 }
          >
            Done Recipes
          </Button>
          <Button
            type="submit"
            className="mt-2 mb-2 border-0 rounded"
            bsPrefix="default-btn"
            onClick={ () => history.push('/favorite-recipes') }
            disabled={ !favoriteRecipes || favoriteRecipes.length === 0 }
          >
            Favorite Recipes
          </Button>
          <Button
            type="submit"
            className="mt-2 mb-2 border-0 rounded"
            bsPrefix="default-btn"
            onClick={ loginRoute }
          >
            Logout
          </Button>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Profile;
