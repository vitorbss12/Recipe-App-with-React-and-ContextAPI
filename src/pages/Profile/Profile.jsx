import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Profile() {
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
          >
            Done Recipes
          </Button>
          <Button
            type="submit"
            className="mt-2 mb-2 border-0 rounded"
            bsPrefix="default-btn"
            onClick={ () => history.push('/favorite-recipes') }
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
