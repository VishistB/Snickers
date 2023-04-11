import React from 'react'
import styles from './studysession.module.css'
import AddIcon from '@mui/icons-material/Add';
import vec from '../../assets/89192-startup-man-in-front-of-phone-and-rocket@2x.png'
import { Link } from "react-router-dom";

function StudySession() {
    return (
        <div className={styles.stusessionwrap}>
            <div className={styles.wrapinner}>
            <h1 className={styles.mainheader}>Study Session</h1>
            <div className={styles.bottomhalf}>
                <div className={styles.lefthalf}>
                    <div className={styles.joinboxes}>
                    <Link to="/Vidcall">
                        <div className={styles.joinbox}>
                            <h3>Join a study session</h3>
                            <AddIcon style={{fontSize:"50px", marginTop:"30px"}}/>
                        </div>
                    </Link>
                        <div className={styles.joinbox}>
                            <h3>Create a study session</h3>
                            <AddIcon style={{fontSize:"50px", marginTop:"30px"}}/>
                        </div>
                        <div className={styles.joinbox}>
                            <h3>Schedule a study session</h3>
                            <AddIcon style={{fontSize:"50px", marginTop:"30px"}}/>
                        </div>
                    </div>
                    <img src={vec} style={{width:"350px"}}/>
                </div>
                
                <div className={styles.righthalf}>
                    <div className={styles.instructionbox}>
                        <p>Please Note that once you enter the rooms for pomodero You can leave only after the time interval you set under 50 mins</p>
                        <p>Camera will stay on for the session</p>
                        <p>No Tab Switching</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default StudySession
