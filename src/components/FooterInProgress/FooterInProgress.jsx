import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FilterContext from '../../contexts/Filters/FilterContext';

function FooterInProgress({ onClick }) {
  const { disabledBtn } = useContext(FilterContext);

  return (
    <footer className="d-flex">
      <Container className="footer d-flex flex-column pt-3 pb-3">
        <Row className="d-flex justify-content-center">
          <Button
            type="submit"
            disabled={ disabledBtn }
            onClick={ onClick }
            className="mr-2 ml-2 border-0 rounded"
            bsPrefix="header-footer-btn"
          >
            Finalizar Receita
          </Button>
        </Row>
      </Container>
    </footer>
  );
}

FooterInProgress.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FooterInProgress;
