import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import { BsSunFill, BsInfoCircleFill } from 'react-icons/bs';
import { clearDetails, unclearDetails } from '../redux/details';
import Styles from './header.module.scss';

const Header = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const onClickArrow = () => {
    dispatch(clearDetails());
  };

  const onClickInfo = () => {
    dispatch(unclearDetails());
  };

  return (
    <header className={Styles.header}>
      <NavLink to="/" onClick={onClickArrow}>
        <BiLeftArrow className={Styles.headerBtns} style={(details.empty) ? { display: 'none' } : {}} />
      </NavLink>
      <div className={Styles.infoAndTheme}>
        <BsSunFill className={Styles.headerBtns} />
        <NavLink to="/about">
          <BsInfoCircleFill className={Styles.headerBtns} onClick={onClickInfo} />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
