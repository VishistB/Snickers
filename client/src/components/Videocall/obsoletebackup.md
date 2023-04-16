import React, { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import styles from "./vidcall.module.css";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import backgroundImage from "../../assets/13_1.png";

const session_duration = 6000; //millisecs

let timePast = parseInt(localStorage.getItem("timePast"));
if (!timePast) {
    timePast = 0;
}

const appId = "7d2f6b401f8345ea9b0106cd9907839f";
const channelName = "StudyVerse";
const token =
    "007eJxTYJigursyV9DSLKJM+ifvNfsz0Qo2T1vU9kXcq2d41ifQnqrAYJ5ilGaWZGJgmGZhbGKammiZZGBoYJacYmlpYG5hbJm2YbF1SkMgI0P0fm0GRigE8bkYgktKUyrDUouKUxkYAFecH4M=";

const client = AgoraRTC.createClient({ codec: "h264", mode: "rtc" });
const localTracksState = { videoTrack: null, audioTrack: null };

const Vidcall = () => {
    const [remoteUsers, setRemoteUsers] = useState([]);
    const [remoteTracks, setRemoteTracks] = useState([]);
    const [localTracks, setLocalTracks] = useState(localTracksState);

    const [isSessionOver, setIsSessionOver] = useState(false);
    const navigate = () => {
        window.location.href = "/Feedback";
        localStorage.removeItem("mytime");
    };

    useEffect(() => {
        (async () => {
            try {
                const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
                setLocalTracks({
                    videoTrack: tracks[1],
                    audioTrack: tracks[0],
                });
                await client.join(appId, channelName, token, null);
                await client.publish([tracks[1], tracks[0]]);

                client.on("user-published", async (user, mediaType) => {
                    await client.subscribe(user, mediaType);
                    if (mediaType === "video") {
                        const remoteVideoTrack = user.videoTrack;
                        setRemoteTracks((prevRemoteTracks) => [
                            ...prevRemoteTracks,
                            remoteVideoTrack,
                        ]);
                        setRemoteUsers((prevRemoteUsers) => [
                            ...prevRemoteUsers,
                            user,
                        ]);
                    }
                });
                client.on("user-unpublished", (user) => {
                    setRemoteUsers((prevRemoteUsers) =>
                        prevRemoteUsers.filter((u) => u !== user)
                    );
                });
                if (isSessionOver) {
                    localTracks.videoTrack.stop();
                }
            } catch (error) {
                console.error(error);
            }
        })();
        return () => {
            client.leave();
        };
    }, []);

    const timerTick = () => {
        timePast += 1000;
        localStorage.setItem("timePast", timePast);
    };
    const timeendtrig = () => {
        setIsSessionOver(true);
        // stop the video when session is over
    };
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                // alert("Tab switched Let's not get distracted shall we?");
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []);

    return (
        <div
            className={styles.vidcallwrap}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
            }}
        >
            <div className={styles.sessionwrap}>
                <p>SESSION LIVE</p>
                {localTracks.videoTrack ? (
                    <div className={styles.videoboxwrap}>
                        <div className={styles.outervidscreen}>
                            <div
                                className={styles.uservidscreen}
                                ref={(v) => v && localTracks.videoTrack.play(v)}
                            />
                        </div>
                        {remoteUsers.map((user) => {
                            const uid = user.uid;
                            return (
                                <div
                                    className={styles.uservidscreen}
                                    key={uid}
                                    ref={(v) => user.videoTrack.play(v)}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <p>This will just take a moment..</p>
                )}
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



