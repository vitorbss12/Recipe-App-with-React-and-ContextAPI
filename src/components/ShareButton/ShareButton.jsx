import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import ShareButtonImg from '../../images/shareIcon.svg';

const MAGIC_NUMBER = 3000;

function ShareButton({ url }) {
  const [show, setShow] = useState(false);

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
    <div className="pr-2 w-25">
      <input
        type="image"
        src={ ShareButtonImg }
        alt="Share"
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
  url: '',
};

ShareButton.propTypes = {
  url: PropTypes.string,
};

export default ShareButton;
