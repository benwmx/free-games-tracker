import React from 'react';
import Logo from '../../img/controller.png';

const Games = () => (
  <div className="container">
    <div className="intro">
      <img src={Logo} alt="game Controller" className="logo" />
      <div className="introSearch">
        <h1>Free Games Tracker</h1>
        <p>Games from 1997 up to now</p>
        <p>You can search by Title,Realease Date,Genre,Developer</p>
        <form>
          <input type="text" className="searchBar" placeholder="Search A Game" />
        </form>
      </div>
    </div>
    <div className="gamesContainer">
      <p>Empty</p>
    </div>
  </div>
);

export default Games;
