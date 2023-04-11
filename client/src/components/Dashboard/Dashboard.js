import React from "react";
import styles from "./dashboard.module.css";
import lrece from "../../assets/L.jpg";
import rrece from "../../assets/2.jpg";
import sessiondata from "./sessiondata.json";
import {FaGift} from "react-icons/fa"
import {IoChatbubblesOutline} from 'react-icons/io5'
import julka from "../../assets/julka.png";
import arrow from "../../assets/arrow.png";

function Dashboard() {
    return (
        <>
            <div className={styles.dashboardwrap}>
                <div className={styles.uinfocard}>
                    <div className={styles.picneditprof}>
                        <div className={styles.profilecircle}>
                            <img src={julka}></img>
                        </div>
                        <div className={styles.namenedit}>
                            <h3 className={styles.nameheader}>ARYAN JULKA </h3>
                            <button className={styles.editbtn}>
                                EDIT PROFILE
                            </button>
                        </div>
                    </div>
                    <div className={styles.learningstat}>
                        <h2>LEARNING STATS</h2>
                        <div className={styles.statitem}>
                            <FaGift/>
                            <h3>CURRENT POINTS:860</h3>
                        </div>
                        <div className={styles.statitem}>
                            <IoChatbubblesOutline/>
                            <h3>Study Ses : 0  </h3>
                        </div>
                        <div className={styles.statitem}>
                            <IoChatbubblesOutline/>
                            <h3>Your Rating</h3>
                        </div>
                        <div className={styles.statitem}>
                            <IoChatbubblesOutline/>
                            <h3>Lorem Ipsum</h3>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div className={styles.skills}>
                        <div><h3>SKILLS ACQUIRED</h3></div>
                        <div className={styles.skills_inner}>
                        <p>1. TAXATION</p>
                        <p>2. INVESTMENT</p>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.dashboardoptions}>
                    <div className={styles.innerboardoptions}>
                        <h1>DASHBOARD</h1>
                        <div className={styles.head_sessions}>
                            <h2>Recently Attended Sessions</h2>
                            <img style={{height:"32px"}} src={arrow}></img>
                        </div>
                        <div className={styles.msessions}>
                            <div className={styles.square1}></div>
                            <h5>MENTORSHIP SESSION ON ELECTRONICS</h5>
                           <p className={styles.time1}> <b>5 Mins Ago</b></p>
                        </div>
                        <div className={styles.studyrooms}>
                            <div className={styles.square2}></div>
                            <h5>ATTENDED A STUDY ROOM</h5>
                            <p className={styles.time1}><b>5 Days Ago</b> </p>
                        </div>
                        <div className={styles.receresource}>
                            <div className={styles.head_sessions}>
                                <h2>Recently Attended Sessions</h2>
                                <img style={{height:"32px"}} src={arrow}></img>
                            </div>
                            <div className={styles.recerespics}>
                                <img className={styles.receimage} src={rrece} />
                                <img className={styles.receimage} src={lrece} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mentorsesdetails}>
                    <div className={styles.innerboardoptions}>
                        <div className={styles.filterwrap}>
                            <h4>Filter</h4>
                            <input type="text" className={styles.filterinp} />
                        </div>
                        <div>
                            <h2>Upcoming Week</h2>
                        </div>
                        <div className={styles.mentorseslist}>
                            <div className={styles.mentorseshead}></div>
                            {sessiondata.map((item) => (
                                <div className={styles.mentorsesent}>
                                    <h5>{item.start_date}</h5>
                                    {/* <p>{item.start_time}</p> */}
                                    {/* <p>{item.course_title}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
