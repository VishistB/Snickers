import React from 'react'
import styles from './dashboard.module.css'

function Dashboard() {
    return (
        <>
            <div className={styles.dashboardwrap}>
                <div className={styles.uinfocard}>
                </div>
                <div className={styles.dashboardoptions}>
                    <div className={styles.innerboardoptions}>
                        <h1>DASHBOARD</h1>
                        <div>
                            <h3>Recently Attended Sessions</h3>
                        </div>
                        <div className={styles.msessions}>
                            <div className={styles.square1}>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mentorsesdetails}>

                </div>
            </div>
        </>
    )
}

export default Dashboard
