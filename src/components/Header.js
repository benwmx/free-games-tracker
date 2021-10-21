import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import { BsSunFill, BsInfoCircleFill } from 'react-icons/bs';
import { clearDetails } from '../redux/details';

const Header = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(clearDetails());
  };

  return (
    <header>
      <NavLink to="/" onClick={onClick}>
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
};

export default Header;
