import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import ShareButtonImg from '../../images/shareIcon.svg';

const MAGIC_NUMBER = 3000;

function ShareButton() {
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
    const textToCopy = window.location.href;
    if (textToCopy.includes('/in-progress')) {
      copy(textToCopy.replace('/in-progress', ''));
    } else {
      copy(textToCopy);
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
        data-testid="share-btn"
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

export default ShareButton;
