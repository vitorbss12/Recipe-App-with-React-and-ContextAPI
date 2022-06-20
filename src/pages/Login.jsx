import React from 'react';

function Login() {
  return (
    <div>
      <form>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="Insira seu email"
            data-testid="email-input"
          />
          Email:
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="Insira sua senha"
            data-testid="password-input"
          />
          Senha:
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
