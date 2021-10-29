import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getListOfGames } from '../../redux/games';
import { getDetailsOfAGame } from '../../redux/details';
import { getUserTheme } from '../../redux/theme';
import Game from './Game';
import Styles from './game.module.scss';

const Games = () => {
  const games = useSelector((state) => state.games);
  const theme = useSelector((state) => state.theme);
  const [searchResult, setSearchResult] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (games.length === 0) {
      dispatch(getListOfGames());
      dispatch(getUserTheme());
    }
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

  const onGameClick = (id) => {
    dispatch(getDetailsOfAGame(id));
  };

  return (
    <div className={(theme.darkTheme) ? Styles.containerDark : Styles.containerLight}>
      <div className={(theme.darkTheme) ? Styles.introSearchDark : Styles.introSearchLight}>
        <div className={Styles.intro}>
          <h1 className={Styles.title}>Free Games Tracker</h1>
          <p>Games from 1997 up to now</p>
          <p>You can search by Title,Realease Date,Genre,Developer</p>
        </div>
        <form className={Styles.search}>
          <input type="text" className={Styles.searchBar} placeholder="Search A Game" onChange={handleSearch} />
        </form>
      </div>
      <div className={Styles.gamesContainer}>
        {
          (searchResult === null)
            ? games.map((game) => (
              <NavLink key={game.id} to="/details" onClick={() => onGameClick(game.id)} className={Styles.gameContainer}>
                <Game game={game} />
              </NavLink>
            ))
            : searchResult.map((game) => (
              <NavLink key={game.id} to="/details" onClick={() => onGameClick(game.id)} className={Styles.gameContainer}>
                <Game game={game} />
              </NavLink>
            ))
        }
      </div>
    </div>
  );
};

export default Games;
