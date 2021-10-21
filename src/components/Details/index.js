import React from 'react';
import { useSelector } from 'react-redux';
import ImageSlider from './ImageSlider';
import Minrequirements from './Minrequirements';

const Details = () => {
  const details = useSelector((state) => state.details);
  return (
    <div className="container">
      <ImageSlider />
      <div className="detailsContainer">
        <h1>title</h1>
        <div className="genre">
          <p className="name">Genre</p>
          <p className="value">{details.genre}</p>
        </div>
        <div className="releaseDate">
          <p className="name">Release Date</p>
          <p className="value">{details.release_date}</p>
        </div>
        <div className="developer">
          <p className="name">Developer</p>
          <p className="value">{details.developer}</p>
        </div>
        <div className="publisher">
          <p className="name">Publisher</p>
          <p className="value">{details.publisher}</p>
        </div>
        <div className="descContainer">
          <p>Description</p>
          <p className="description">
            {details.description}
          </p>
        </div>
      </div>
      <Minrequirements />
    </div>
  );
};
export default Details;
