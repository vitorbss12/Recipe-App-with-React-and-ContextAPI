import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormLogin.css';

function FormLogin() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);
  const history = useHistory();

  const emailValidation = (email) => {
    const pattern = /\S+@\S+.com/;
    return pattern.test(email);
  };

  const passwordValidation = (password) => {
    const MIN_PASSWORD_LENGTH = 6;
    return password.length > MIN_PASSWORD_LENGTH;
  };

  useEffect(() => {
    const btnStatus = emailValidation(userEmail)
      && passwordValidation(userPassword);

    setIsBtnEnabled(btnStatus);
  }, [userEmail, userPassword]);

  const loginFormsSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));
    history.push('/foods');
    console.log('submit');
  };

  return (
    <Container fluid>
      <Form
        className="login-forms shadow p-4 mb-5 bg-white"
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
