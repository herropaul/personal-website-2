import React, { useState } from 'react';
import {Link} from 'react-scroll';
import NextLink from 'next/link';
import styles from './Sidebar.module.css';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const SideBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return(
        <nav className={styles.wrapper}>
            <NextLink href='/'>
                <a className={styles.logo}>
                    PN
                </a>
            </NextLink>
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