import React, { useState } from 'react';
import {Link} from 'react-scroll';
import styles from './Sidebar.module.css';

const SideBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return(
        <nav className={styles.wrapper}>
            <a href='/' className={styles.logo}>
              PN
            </a>
          <ul className={styles.navListItems}>
              <li key='1' className={styles.navItem}>
                  <Link to="about" spy={true} offset={-50} smooth={true} duration={500} onClick={closeMenu}>About</Link>
              </li>
              <li key='2' className={styles.navItem}>
                  <Link to="projects" spy={true} offset={0} smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
              </li>
              <li key='3' className={styles.navItem}>
                  <Link to="resume" spy={true} offset={-50} smooth={true} duration={500} onClick={closeMenu}>Resume</Link>
              </li>
              <li key='4' className={styles.navItem}>
                  <Link to="contact" spy={true} offset={-50} smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
              </li>
          </ul>
        </nav>
    );
}

export default SideBar;