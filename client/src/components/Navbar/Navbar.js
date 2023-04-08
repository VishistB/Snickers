import React from 'react';
import { FaHome, FaUserFriends, FaBook, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';
import styles from './navbar.module.css';
import logo from '../../assets/logo1-removebg-preview.png'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} style={{width:"48px"}}/>
      <ul className={styles.navbarnav}>
        <li className={styles.navitem}>
          <a href="#" className={styles.navlink}>
            <FaHome className={styles.navicon}/>
            <span className={styles.linktext}></span>
          </a>
        </li>
        <li className={styles.navitem}>
          <a href="#" className={styles.navlink}>
            <FaUserFriends className={styles.navicon}/>
            <span className={styles.linktext}></span>
          </a>
        </li>
        <li className={styles.navitem}>
          <a href="#" className={styles.navlink}>
            <FaBook className={styles.navicon} />
            <span className={styles.linktext}></span>
          </a>
        </li>
        <li className={styles.navitem}>
          <a href="#" className={styles.navlink}>
            <FaPuzzlePiece className={styles.navicon}/>
            <span className={styles.linktext}></span>
          </a>
        </li>
        <li className={styles.navitem}>
          <a href="#" className={styles.navlink}>
            <FaEnvelope className={styles.navicon}/>
            <span className={styles.linktext}></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
