const emailValidation = (email) => {
  const pattern = /\S+@\S+.com/;
  return pattern.test(email);
};

const passwordValidation = (password) => {
  const MIN_PASSWORD_LENGTH = 6;
  return password.length > MIN_PASSWORD_LENGTH;
};

export { emailValidation, passwordValidation };
