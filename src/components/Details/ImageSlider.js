import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImageSlider = (props) => {
  const { screenshots, thumbnail } = props;

  return (
    <div className="imageSlider">
      {
        (screenshots.length > 0)

          ? (
            <Slide easing="ease">
              {
          screenshots.map((screenshot) => (
            <img key={screenshot.id} src={screenshot.image} style={{ width: '100%', backgroundSize: 'content' }} alt="game screenshot not available" />
          ))
        }
            </Slide>
          )
          : <img src={thumbnail} alt="A Games thumbnail" />
      }
    </div>
  );
};

ImageSlider.propTypes = {
  screenshots: PropTypes.shape.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ImageSlider;
