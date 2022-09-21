import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import ShareButtonImg from '../../images/shareIcon.svg';

const MAGIC_NUMBER = 3000;

function ShareButton({ datatest, url }) {
  const [show, setShow] = useState(false);

  const buttonStyle = {
    margin: '5px',
    width: '40px',
  };

  useEffect(() => {
    function showMessage() {
      setTimeout(() => {
        setShow(false);
      }, MAGIC_NUMBER);
    }
    showMessage();
    return () => {
      clearTimeout();
    };
  }, [show]);

  function writeText() {
    const currentUrl = window.location.href;
    const urlToCopy = currentUrl.split('/');
    const lastUrl = urlToCopy[urlToCopy.length - 1];
    switch (lastUrl) {
    case 'in-progress':
      copy(currentUrl.replace('/in-progress', ''));
      break;
    case 'favorite-recipes':
      copy(currentUrl.replace('/favorite-recipes', `${url}`));
      break;
    case 'done-recipes':
      copy(currentUrl.replace('/done-recipes', `${url}`));
      break;
    default:
      copy(currentUrl);
      break;
    }
  }

  function handleClick() {
    setShow(true);
    writeText();
  }

  return (
    <div>
      <input
        type="image"
        src={ ShareButtonImg }
        alt="Share"
        data-testid={ datatest }
        style={ buttonStyle }
        onClick={ handleClick }
      />
      {
        show && (
          <p>Link copied!</p>
        )
      }
    </div>
  );
}

ShareButton.defaultProps = {
  datatest: 'share-btn',
  url: '',
};

ShareButton.propTypes = {
  datatest: PropTypes.string,
  url: PropTypes.string,
};

export default ShareButton;