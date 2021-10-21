import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import { BsSunFill, BsInfoCircleFill } from 'react-icons/bs';

function Header() {
  return (
    <header>
      <NavLink to="/">
        <BiLeftArrow />
      </NavLink>
      <div>
        <BsSunFill />
        <NavLink to="/about">
          <BsInfoCircleFill />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
