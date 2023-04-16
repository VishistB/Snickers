import React, { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import styles from "./vidcall.module.css";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import { VideoPlayer } from "./vidplayer";
import backgroundImage from "../../assets/13_1.png";

const session_duration = 6000; //millisecs

let timePast = parseInt(localStorage.getItem("timePast"));
if (!timePast) {
    timePast = 0;
}

const APP_ID = "7d2f6b401f8345ea9b0106cd9907839f";
const CHANNEL = "StudyVerse";
const TOKEN =
    "007eJxTYJigursyV9DSLKJM+ifvNfsz0Qo2T1vU9kXcq2d41ifQnqrAYJ5ilGaWZGJgmGZhbGKammiZZGBoYJacYmlpYG5hbJm2YbF1SkMgI0P0fm0GRigE8bkYgktKUyrDUouKUxkYAFecH4M=";

const client = AgoraRTC.createClient({ codec: "h264", mode: "rtc" });
const localTracksState = { videoTrack: null, audioTrack: null };

const Vidcall = () => {
    const [users, setUsers] = useState([]);
    const [localTracks, setLocalTracks] = useState([]);

    const handleUserJoined = async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if (mediaType === "video") {
            setUsers((previousUsers) => [...previousUsers, user]);
        }

        if (mediaType === "audio") {
            // user.audioTrack.play()
        }
    };

    const handleUserLeft = (user) => {
        setUsers((previousUsers) =>
            previousUsers.filter((u) => u.uid !== user.uid)
        );
    };

    useEffect(() => {
        client.on("user-published", handleUserJoined);
        client.on("user-left", handleUserLeft);

        client
            .join(APP_ID, CHANNEL, TOKEN, null)
            .then((uid) =>
                Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
            )
            .then(([tracks, uid]) => {
                const [audioTrack, videoTrack] = tracks;
                setLocalTracks(tracks);
                setUsers((previousUsers) => [
                    ...previousUsers,
                    {
                        uid,
                        videoTrack,
                        audioTrack,
                    },
                ]);
                client.publish(tracks);
            });

        return () => {
            for (let localTrack of localTracks) {
                localTrack.stop();
                localTrack.close();
            }
            client.off("user-published", handleUserJoined);
            client.off("user-left", handleUserLeft);
            // client.unpublish(tracks).then(() => client.leave());
        };
    }, []);

    // STOPWATCH RELATED FUNCTIONS AND VARIABLES
    const [isSessionOver, setIsSessionOver] = useState(false);
    const navigate = () => {
        window.location.href = "/Feedback";
        localStorage.removeItem("mytime");
    };

    const timerTick = () => {
        timePast += 1000;
        localStorage.setItem("timePast", timePast);
    };
    const timeendtrig = () => {
        setIsSessionOver(true);
        // stop the video when session is over
    };

    return (
        <div
            className={styles.vidcallwrap}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
            }}
        >
            <div className={styles.videoboxwrap}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 33%)",
                        margin:"10px"
                    }}
                >
                    {users.map((user) => (
                        <VideoPlayer key={user.uid} user={user} />
                    ))}
                </div>
            </div>
            <div className={styles.counterwrap}>
                <div className={styles.counter}>
                    <Countdown
                        date={Date.now() + session_duration - timePast}
                        onTick={timerTick}
                        onComplete={() => {
                            // navigate();
                            // Handle session completion here
                        }}
                        // onStart={}
                    />
                </div>
            </div>
        </div>
    );
};

export default Vidcall;
