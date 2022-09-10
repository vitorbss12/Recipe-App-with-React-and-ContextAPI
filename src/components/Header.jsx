import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SearchBar from './Filters/SearchBar';
import '../styles/components/Header.css';

function Header({ title, showSearchBar }) {
  const history = useHistory();

  return (
    <header>
      <Container className="header mb-2 p-3">
        <Row className="mb-2">
          <Col>
            <h1 className="page-title">
              {title}
            </h1>
          </Col>
          <Col className="d-flex justify-content-end align-self-center">
            <Button
              type="button"
              bsPrefix="header-btn"
              onClick={ () => history.push('/profile') }
            >
              Profile
            </Button>
          </Col>
        </Row>
        <Row>
          {showSearchBar && (
            <SearchBar title={ title } />
          )}
        </Row>
      </Container>
    </header>
  );
}

Header.defaultProps = {
  showSearchBar: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchBar: PropTypes.bool,
};

export default Header;
