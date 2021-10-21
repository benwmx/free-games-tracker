/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ImageSlider = (props) => {
  const { screenshots, thumbnail } = props;

  return (
    <div className="imageSlider">
      {
        (screenshots.length > 0)
          ? screenshots.map((screenshot) => (<img key={screenshot.id} src={screenshot.image} alt="A Games thumbnail" />))
          : <img src={thumbnail} alt="A Games thumbnail" />
      }
    </div>
  );
};

ImageSlider.propTypes = {
  screenshots: PropTypes.array,
  thumbnail: PropTypes.string,
};

export default ImageSlider;
