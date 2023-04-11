import React from 'react';
import { FaHome, FaUserFriends, FaBook, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';
import styles from './navbar.module.css';
import logo from '../../assets/logo1-removebg-preview.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} style={{width:"50px", margin:"5px auto"}}/>
      <ul className={styles.navbarnav}>
        <li className={styles.navitem}>
          <a href="#" className={styles.navlink}>
          <Link to="/"><FaHome className={styles.navicon}/></Link>
            <span className={styles.linktext}></span>
          </a>
        </li>
        <li className={styles.navitem}>
          <a href="#" className={styles.navlink}>
          <Link to="/StudySession"><FaUserFriends className={styles.navicon}/></Link>
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
