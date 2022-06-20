import React, { useState } from 'react';

function Login() {
  // define os estados
  const [userEmailInput, setUserEmailInput] = useState('');
  const [userPasswordInput, setUserPasswordInput] = useState('');

  // faz a validação do email
  const pattern = /\S+@\S+.com/;
  const isEmailValid = pattern.test(userEmailInput);
  console.log(isEmailValid);
  const MIN_PASSWORD_LENGTH = 6;
  const isBtnEnabled = isEmailValid && userPasswordInput.length > MIN_PASSWORD_LENGTH;

  // funções:
  const saveTokensToLocalStorage = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  };

  return (
    <div>
      <form onSubmit={ saveTokensToLocalStorage }>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="Insira seu email"
            data-testid="email-input"
            onChange={ ({ target }) => setUserEmailInput(target.value) }
          />
          Email:
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="Insira sua senha"
            data-testid="password-input"
            onChange={ ({ target }) => setUserPasswordInput(target.value) }
          />
          Senha:
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ !isBtnEnabled }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
