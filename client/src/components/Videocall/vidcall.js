import React, { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import styles from './vidcall.module.css'

const appId = '7d2f6b401f8345ea9b0106cd9907839f'; // Replace with your Agora App ID
const channelName = 'StudyVerse'; // Replace with your channel name
const token = '007eJxTYJip0f1B8Z10f2ZltLKqIOu2nKAvwQZcD2YzzKn/VX9WmEGBwTzFKM0sycTAMM3C2MQ0NdEyycDQwCw5xdLSwNzC2DIte6NhSkMgI8PpdV0MjFAI4nMxBJeUplSGpRYVpzIwAABOkx+l'; // Replace with your Agora token (if using)

const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });
const localTracksState = { videoTrack: null, audioTrack: null };

const Vidcall= () => {
  const [remoteUsers, setRemoteUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState(localTracksState);

  useEffect(() => {
    (async () => {
      try {
        const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
        setLocalTracks({ videoTrack: tracks[1], audioTrack: tracks[0] });
        await client.join(appId, channelName, token, null);
        await client.publish([tracks[1], tracks[0]]);
        client.on('user-published', async (user, mediaType) => {
          await client.subscribe(user, mediaType);
          if (mediaType === 'video') {
            setRemoteUsers(prevRemoteUsers => [...prevRemoteUsers, user]);
          }
        });
        client.on('user-unpublished', user => {
          setRemoteUsers(prevRemoteUsers => prevRemoteUsers.filter(u => u !== user));
        });
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      client.leave();
    };
  }, []);

  return (
    <div>
      <div>
        {localTracks.videoTrack ? (
          <div>
            <p>Local Video</p>
            <div className={styles.uservidscreen} ref={v => v && localTracks.videoTrack.play(v)} />
          </div>
        ) : (
          <p>No Local Video</p>
        )}
      </div>
      <div>
        {remoteUsers.map(user => (
          <div key={user.uid}>
            <p>Remote User {user.uid}</p>
            <div ref={v => v && user.videoTrack.play(v)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vidcall;