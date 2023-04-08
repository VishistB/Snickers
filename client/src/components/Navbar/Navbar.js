import React from 'react';
import { FaHome, FaUserFriends, FaBook, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaHome className="nav-icon" />
            <span className="link-text"></span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaUserFriends className="nav-icon" />
            <span className="link-text"></span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaBook className="nav-icon" />
            <span className="link-text"></span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaPuzzlePiece className="nav-icon" />
            <span className="link-text"></span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaEnvelope className="nav-icon" />
            <span className="link-text"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
