import React from 'react';
import { useSelector } from 'react-redux';
import ImageSlider from './ImageSlider';
import Minrequirements from './Minrequirements';
import Styles from './details.module.scss';

const Details = () => {
  const details = useSelector((state) => state.details);
  const theme = useSelector((state) => state.theme);

  return (
    <div className={(theme.darkTheme) ? Styles.containerDark : Styles.containerLight}>
      <div className={Styles.screenShotsContainer}>
        {
        (details.screenshots === undefined)
          ? 'Loading ...'
          : <ImageSlider screenshots={details.screenshots} thumbnail={details.thumbnail} />
      }
      </div>
      <div className={Styles.detailsContainer}>
        <h1 className={Styles.title}>{details.title}</h1>
        <div className={Styles.genre}>
          <p className={Styles.name}>Genre : </p>
          <p className={Styles.value}>{details.genre}</p>
        </div>
        <div className={Styles.releaseDate}>
          <p className={Styles.name}>Release Date : </p>
          <p className={Styles.value}>{details.release_date}</p>
        </div>
        <div className={Styles.developer}>
          <p className={Styles.name}>Developer : </p>
          <p className={Styles.value}>{details.developer}</p>
        </div>
        <div className={Styles.publisher}>
          <p className={Styles.name}>Publisher : </p>
          <p className={Styles.value}>{details.publisher}</p>
        </div>
        <div className={Styles.descContainer}>
          <p className={Styles.descName}>Description : </p>
          <p className={Styles.description}>
            {details.description}
          </p>
        </div>
        <div className={Styles.minReqs}>
          {
            (details.minimum_system_requirements !== undefined)
              ? <Minrequirements requirements={details.minimum_system_requirements} />
              : ''
          }
        </div>
        <div className={Styles.link}>
          <p className={Styles.name}>Link : </p>
          <p className={Styles.value}>
            {
              (details.game_url !== undefined)
                ? <a href={details.game_url}>🔗 more on official Website 🔗 </a>
                : 'No Link Available'
            }
          </p>
        </div>
      </div>
    </div>
  );
};
export default Details;
