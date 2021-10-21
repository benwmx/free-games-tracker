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
        <h1>{details.title}</h1>
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
      <div className="minReqs">
        {
          (details.minimum_system_requirements !== undefined)
            ? <Minrequirements requirements={details.minimum_system_requirements} />
            : ''
        }
      </div>
      <div className="link">
        <p className="name">Link</p>
        <p className="value">
          {
          (details.game_url !== undefined)
            ? <a href={details.game_url}>more on official Website</a>
            : 'No'
        }
        </p>
      </div>

    </div>
  );
};
export default Details;
