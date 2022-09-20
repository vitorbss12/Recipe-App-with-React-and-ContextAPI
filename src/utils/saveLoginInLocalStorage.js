const saveLoginInLocalStorage = (userEmail) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email: userEmail }));
};

export default saveLoginInLocalStorage;
