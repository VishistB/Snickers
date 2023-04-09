import React from 'react'
import styles from './topnav.module.css'

function Topnav() {
    return (
        <div className={styles.Topnavwrap}>
            <h1 className={styles.projname}>Learnify</h1>
            <div className={styles.topnavright}>
                <h3>Hello Vishist</h3>
            </div>
        </div>
    )
}

export default Topnav
