import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header({ title, showSearchBar }) {
  const history = useHistory();

  return (
    <header className="d-flex">
      <Container className="header d-flex flex-column pt-3 pb-3">
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col className="d-flex justify-content-start align-items-center">
            <h1 className="page-title text-white pl-4">
              {title}
            </h1>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <Button
              type="button"
              className="rounded border-0"
              bsPrefix="header-footer-btn"
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
