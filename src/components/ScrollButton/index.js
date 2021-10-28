/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import Styles from './scrollButton.module.scss';

const scrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useSelector((state) => state.theme);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={Styles.scrollButton}
      style={
        (isVisible)
          ? { display: 'inline-block' }
          : { display: 'none' }
      }
      type="button"
      onClick={scrollToTop}
    >
      <BsArrowUpCircleFill
        className={
          (theme.darkTheme)
            ? Styles.scrollIconDark
            : Styles.scrollIconLight
        }
      />
    </button>
  );
};

export default scrollButton;
