import React, { useState } from 'react';
import {Link} from 'react-scroll';
import NextLink from 'next/link';
import styles from './Sidebar.module.css';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
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
              <NextLink href="https://github.com/herropaul">
                <a>
                    <BsGithub className="transform w-12 h-12 p-2 mt-5 hover:transition duration-500 hover:scale-125 sm:hover:scale-150"/>
                </a>
              </NextLink>
              <NextLink href="https://www.linkedin.com/in/paul-nguon/">
                <a>
                    <BsLinkedin className="transform w-12 h-12 p-2 mt-5 hover:transition duration-500 hover:scale-125 sm:hover:scale-150"/>
                </a>
              </NextLink>
          </ul>
        </nav>
    );
}

export default SideBar;