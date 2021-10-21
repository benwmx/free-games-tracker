/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getListOfGames } from '../../redux/games';
import { getDetailsOfAGame } from '../../redux/details';
import Game from './Game';
import Logo from '../../img/controller.png';

const Games = () => {
  const games = useSelector((state) => state.games);
  const [searchResult, setSearchResult] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (games.length === 0) dispatch(getListOfGames());
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const result = games.filter((game) => {
      const input = event.target.value.toLowerCase().trim();
      const title = game.title.toLowerCase().trim();
      const releaseDate = game.release_date.toLowerCase().trim();
      const developer = game.developer.toLowerCase().trim();
      const genre = game.genre.toLowerCase().trim();
      return title.includes(input) || releaseDate.includes(input)
            || genre.includes(input) || developer.includes(input);
    });
    setSearchResult(result);
  };

  const onGameClick = (event, id) => {
    dispatch(getDetailsOfAGame(id));
  };

  return (
    <div className="container">
      <div className="intro">
        <img src={Logo} alt="game Controller" className="logo" />
        <div className="introSearch">
          <h1>Free Games Tracker</h1>
          <p>Games from 1997 up to now</p>
          <p>You can search by Title,Realease Date,Genre,Developer</p>
          <form>
            <input type="text" className="searchBar" placeholder="Search A Game" onChange={handleSearch} />
          </form>
        </div>
      </div>
      <div className="gamesContainer">
        {
          (searchResult === null)
            ? games.map((game) => (
              <NavLink key={game.id} to="/details" onClick={(event) => onGameClick(event, game.id)}>
                <Game game={game} />
              </NavLink>
            ))
            : searchResult.map((game) => (
              <NavLink key={game.id} to="/details">
                <Game game={game} />
              </NavLink>
            ))
        }
      </div>
    </div>
  );
};

export default Games;
