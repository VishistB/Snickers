import React from 'react'
import styles from './vidcall.module.css'
import AgoraRTC from 'agora-rtc-sdk-ng'

const APP_ID='7d2f6b401f8345ea9b0106cd9907839f'
const TOKEN=''
const CHANNEL='StudyVerse'

const client=AgoraRTC.createClient({
    mode:'rtc',
    codec:'vp8'
})


function Vidcall() {
    return (
        <>
            <div className={styles.vidcallwrap}>
                
            </div>
        </>
    )
}

export default Vidcall
