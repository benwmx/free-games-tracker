import React from 'react';
import { useSelector } from 'react-redux';

function Game() {
  const game = useSelector((state) => state.details);
  return (
    <div className="gameContainer">
      <img className="image" src={game.thumbnail} alt="a game thumbnail" />
      <div className="details">
        <h2 className="title">{game.title}</h2>
        <p className="genre">{game.genre}</p>
        <p className="releaseDate">{game.releaseDate}</p>
        <p className="developer">{game.developer}</p>
      </div>
    </div>
  );
}

export default Game;
