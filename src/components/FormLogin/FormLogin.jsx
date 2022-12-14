import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { emailValidation, passwordValidation } from '../../utils/loginValidation';
import saveLoginInLocalStorage from '../../utils/saveLoginInLocalStorage';
import './FormLogin.css';

function FormLogin() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const btnStatus = emailValidation(userEmail)
      && passwordValidation(userPassword);

    setIsBtnEnabled(btnStatus);
  }, [userEmail, userPassword]);

  const loginFormsSubmit = (event) => {
    event.preventDefault();
    saveLoginInLocalStorage(userEmail);
    history.push('/Recipe-App-with-React-and-ContextAPI/foods');
  };

  return (
    <Container fluid>
      <Form
        className="login-forms shadow p-4 bg-white"
        onSubmit={ loginFormsSubmit }
      >
        <Form.Group controlId="formBasicEmail" className="login-labels">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={ ({ target }) => setUserEmail(target.value) }
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="login-labels">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={ ({ target }) => setUserPassword(target.value) }
          />
        </Form.Group>
        <Button
          bsPrefix="default-btn"
          className="border-0 rounded"
          type="submit"
          disabled={ !isBtnEnabled }
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default FormLogin;
