import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import getDoneRecipe from '../../utils/getDoneRecipe';
import getInProgressRecipe from '../../utils/getInProgressRecipe';

function FooterDetails({ option, id }) {
  const history = useHistory({ id });
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [inProgressRecipe, setInProgressRecipe] = useState(false);

  useEffect(() => {
    setDoneRecipe(getDoneRecipe(id));
    setInProgressRecipe(getInProgressRecipe(option, id));
  }, [option, id]);

  return (
    <footer className="d-flex">
      <Container className="footer d-flex flex-column pt-3 pb-3">
        { !doneRecipe && (
          <Row className="d-flex justify-content-center">
            <Button
              type="submit"
              onClick={ () => history.push(`/${option}/${id}/in-progress`) }
              className="mr-2 ml-2 border-0 rounded"
              bsPrefix="header-footer-btn"
            >
              { inProgressRecipe ? 'Continue Recipe' : 'Start Recipe' }
            </Button>
          </Row>
        ) }
      </Container>
    </footer>
  );
}

FooterDetails.propTypes = {
  id: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
};

export default FooterDetails;
