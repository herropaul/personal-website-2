import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const SideBar = () => {
    const navigationData = ["About", "Projects", "Resume", "Contact"];

    return(
        <nav className={styles.wrapper}>
          <a href="/" className={styles.logo}>
            PN
          </a>
          <ul className={styles.navListItems}>
              {navigationData.map((item, index) => (
                  <li key={index} className={styles.navItem}>{item}</li>
              ))}
          </ul>
        </nav>
    );
}

export default SideBar;