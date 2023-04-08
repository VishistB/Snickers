import React from "react";
import styles from "./dashboard.module.css";
import lrece from "../../assets/L.jpg";
import rrece from "../../assets/2.jpg";
import sessiondata from './sessiondata.json'

function Dashboard() {
    return (
        <>
            <div className={styles.dashboardwrap}>
                <div className={styles.uinfocard}></div>
                <div className={styles.dashboardoptions}>
                    <div className={styles.innerboardoptions}>
                        <h1>DASHBOARD</h1>
                        <div>
                            <h2>Recently Attended Sessions</h2>
                        </div>
                        <div className={styles.msessions}>
                            <div className={styles.square1}></div>
                        </div>
                        <div className={styles.studyrooms}>
                            <div className={styles.square2}></div>
                        </div>
                        <div className={styles.receresource}>
                            <h2>Recently Attended Sessions</h2>
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
                            <div className={styles.mentorseshead}>
                            </div>
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
