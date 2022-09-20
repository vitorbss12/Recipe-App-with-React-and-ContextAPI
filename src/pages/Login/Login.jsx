import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormLogin from '../../components/FormLogin/FormLogin';
import './Login.css';

function Login() {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center mx-auto"
    >
      <Row>
        <h2 className="login-title">Let&apos;s Cook!</h2>
      </Row>
      <Row>
        <h3 className="login-subtitle">
          An app for those who like to cook
        </h3>
      </Row>
      <Row>
        <FormLogin />
      </Row>
    </Container>
  );
}

export default Login;
