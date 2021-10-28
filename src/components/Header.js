import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RiHome2Fill } from 'react-icons/ri';
import { BsSunFill, BsInfoCircleFill, BsMoonFill } from 'react-icons/bs';
import { clearDetails, unclearDetails } from '../redux/details';
import { toggleTheme, updateUserTheme } from '../redux/theme';
import Styles from './header.module.scss';

const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const onClickHome = () => {
    dispatch(clearDetails());
  };

  const onClickInfo = () => {
    dispatch(unclearDetails());
  };

  const onClickTheme = () => {
    dispatch(toggleTheme());
    dispatch(updateUserTheme());
  };

  return (
    <header
      className={Styles.header}
      style={(theme.darkTheme)
        ? { backgroundColor: 'rgba(0, 0, 0, 0.8)' }
        : { backgroundColor: 'rgba(219, 219, 219, 0.8)' }}
    >
      <NavLink to="/" onClick={onClickHome}>
        <RiHome2Fill
          className={(theme.darkTheme) ? Styles.headerBtnsDark : Styles.headerBtnsLight}
        />
      </NavLink>
      <div className={Styles.infoAndTheme}>
        {
          (theme.darkTheme)
            ? <BsSunFill className={Styles.headerBtnsDark} onClick={onClickTheme} />
            : <BsMoonFill className={Styles.headerBtnsLight} onClick={onClickTheme} />
        }
        <NavLink to="/about">
          <BsInfoCircleFill
            className={(theme.darkTheme) ? Styles.headerBtnsDark : Styles.headerBtnsLight}
            onClick={onClickInfo}
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
