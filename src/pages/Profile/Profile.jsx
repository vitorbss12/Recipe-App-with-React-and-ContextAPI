import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Profile({ history }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const loginRoute = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header title="Profile" />
      <Footer />
      <div>
        <p data-testid="profile-email">{ user?.email }</p>
        <button
          type="submit"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="submit"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="submit"
          data-testid="profile-logout-btn"
          onClick={ loginRoute }
        >
          Logout
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
