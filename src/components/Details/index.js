import React from 'react';
import ImageSlider from './ImageSlider';
import Minrequirements from './Minrequirements';

const Details = () => (
  <div className="container">
    <ImageSlider />
    <div className="detailsContainer">
      <h1>title</h1>
      <div className="genre">
        <p className="name">Genre</p>
        <p className="value">genre</p>
      </div>
      <div className="releaseDate">
        <p className="name">Release Date</p>
        <p className="value">release_date</p>
      </div>
      <div className="developer">
        <p className="name">Developer</p>
        <p className="value">developer</p>
      </div>
      <div className="publisher">
        <p className="name">Publisher</p>
        <p className="value">publisher</p>
      </div>
      <div className="descContainer">
        <p>Description</p>
        <p className="description">
          description
        </p>
      </div>
    </div>
    <Minrequirements />
  </div>
);

export default Details;
