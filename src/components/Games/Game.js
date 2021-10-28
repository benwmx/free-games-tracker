import React from 'react';
import PropTypes from 'prop-types';
import Styles from './game.module.scss';

function Game(props) {
  const { game } = props;
  return (
    <>
      <img className={Styles.image} src={game.thumbnail} alt="a game thumbnail" />
      <div className={Styles.details}>
        <h2 className={Styles.title}>{game.title}</h2>
        <p className={Styles.genre}>{game.genre}</p>
        <p className={Styles.developer}>{game.developer}</p>
        <p className={Styles.releaseDate}>{game.release_date}</p>
      </div>
    </>
  );
}

Game.propTypes = {
  game: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
  }).isRequired,
};

export default Game;
