/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
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
  screenshots: PropTypes.array,
  thumbnail: PropTypes.string,
};

// {
//   (screenshots.length > 0)
//     ? screenshots.map((screenshot) =>
//     (<img key={screenshot.id} src={screenshot.image} alt="A Games thumbnail" />))
//     : <img src={thumbnail} alt="A Games thumbnail" />
// }

export default ImageSlider;
