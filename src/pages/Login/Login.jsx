import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
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
    <Container fluid className="align-self-center">
      <Row className="justify-content-center">
        <h2 className="login-title">Let&apos;s Cook!</h2>
      </Row>
      <Row className="justify-content-center">
        <h3 className="login-subtitle">An app for those who like to cook</h3>
      </Row>
      <Row className="justify-content-center">
        <Form className="login-forms" onSubmit={ loginFormsSubmit }>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={ ({ target }) => setUserEmail(target.value) }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={ ({ target }) => setUserPassword(target.value) }
            />
          </Form.Group>
          <Button
            bsPrefix="login-btn"
            className="md-auto"
            type="submit"
            disabled={ !isBtnEnabled }
          >
            Login
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
