import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Footer.css';

function Footer() {
  const history = useHistory();

  return (
    <footer className="d-flex">
      <Container className="footer d-flex flex-column pt-3 pb-3">
        <Row className="d-flex justify-content-center">
          <Button
            type="button"
            className="mr-2 ml-2 border-0 rounded"
            bsPrefix="header-footer-btn"
            onClick={ () => history.push('/foods') }
          >
            Foods
          </Button>
          <Button
            type="button"
            className="mr-2 ml-2 border-0 rounded"
            bsPrefix="header-footer-btn"
            onClick={ () => history.push('/explore') }
          >
            Explore
          </Button>
          <Button
            type="button"
            className="mr-2 ml-2 border-0 rounded"
            bsPrefix="header-footer-btn"
            onClick={ () => history.push('/drinks') }
          >
            Drinks
          </Button>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
