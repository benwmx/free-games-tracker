import React from 'react';
import { useSelector } from 'react-redux';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Styles from './about.module.scss';

const About = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={(theme.darkTheme) ? Styles.containerDark : Styles.containerLight}>

      <h1 className={Styles.title}>About</h1>
      <p className={Styles.text}>
        A web-based application to search for free games Develped with 💓 by
        <span className={Styles.name}> Rachid Boudaoudi </span>
        {' '}
        AKA
        {' '}
        <span className={Styles.name}>@benwmx</span>
      </p>
      <div className={Styles.contact}>
        <h2>Contact Me</h2>
        <ul className={Styles.socialList}>
          <li className={Styles.socialBtn}>
            <a href="https://github.com/benwmx">
              <BsGithub className={Styles.btn} />
            </a>
          </li>
          <li className={Styles.socialBtn}>
            <a href="https://www.linkedin.com/in/rachid-boudaoudi/">
              <BsLinkedin className={Styles.btn} />
            </a>
          </li>
          <li className={Styles.socialBtn}>
            <a href="https://twitter.com/ben_wmx">
              <BsTwitter className={Styles.btn} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
