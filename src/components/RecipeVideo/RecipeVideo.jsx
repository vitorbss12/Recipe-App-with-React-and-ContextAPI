import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

function RecipeVideo({ name, url }) {
  return (
    <Container fluid="xxl">
      { url && (
        <iframe
          className="w-100"
          height="280"
          src={ url.replace('watch?v=', 'embed/') }
          allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
          allowFullScreen
          title={ `Video Instructions for ${name}` }
        />
      )}
    </Container>
  );
}

RecipeVideo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default RecipeVideo;
