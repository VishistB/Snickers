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
                            <h2>Recently Attended Sessions</h2>
                        </div>
                        <div className={styles.msessions}>
                            <div className={styles.square1}>

                            </div>
                        </div>
                        <div className={styles.studyrooms}>
                            <div className={styles.square2}>
                                
                            </div>
                        </div>
                        <div className={styles.receresource}>
                            <h2>Recently Attended Sessions</h2>
                            <div className={styles.recerespics}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mentorsesdetails}>
                    <div className={styles.innerboardoptions}>
                        <div className={styles.filterwrap}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
