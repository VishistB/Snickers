import React from "react";
import styles from "./Landingstyle.module.css";
import logo from "../../assets/LEARNIFY_LOGO.png";
import { Link } from "react-router-dom";
import { FaHome, FaUserFriends, FaBook, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';
import backgroundImage from '../../assets/13_1.png';
import {Routes, Route, useNavigate} from 'react-router-dom';



function Landing() {
    const navigate = useNavigate();

    const navigatelogin = () => {
        navigate('/Login');
      };

    return (
        <div className={styles.landingwrap} style={{backgroundImage: `url(${backgroundImage})`, backgroundSize:"cover" }}>
            <div className={styles.tempnav} >
                <img src={logo} style={{ width: "50px", height: "50px" }} />
                <ul className={styles.navbarnav}>
                    <li className={styles.navitem}>
                        <a href="#" className={styles.navlink}>
                            <Link to="/">
                                <FaHome className={styles.navicon} />
                            </Link>
                            <span className={styles.linktext}></span>
                        </a>
                    </li>
                    <li className={styles.navitem}>
                        <a href="#" className={styles.navlink}>
                            <Link to="/StudySession">
                                <FaUserFriends className={styles.navicon} />
                            </Link>
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
                            <FaPuzzlePiece className={styles.navicon} />
                            <span className={styles.linktext}></span>
                        </a>
                    </li>
                    <li className={styles.navitem}>
                        <a href="#" className={styles.navlink}>
                            <FaEnvelope className={styles.navicon} />
                            <span className={styles.linktext}></span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.mainlandingwrap}>
                <div className={styles.mainheaders}>
                <h1 className={styles.massivetext}>LEARNIFY</h1>
                <h1 className={styles.submassivetext}>REVOLUTIONISING EDUCATION</h1>
                <button className={styles.loginbtn} onClick={navigatelogin}>LOGIN !</button>
                </div>
            </div>
            <div className={styles.secondlandingwrap}>
                <div className={styles.darkwrap}>
                    <h2 className={styles.abtushead}>ABOUT US</h2>
                    <div className={styles.yellowcnt}>
                        <p></p>
                    </div>
                    <h2 className={styles.abtushead}>WHAT WE OFFER?</h2>
                </div>
            </div>
        </div>
    );
}

export default Landing;
