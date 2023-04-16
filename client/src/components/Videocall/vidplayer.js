import React, { useEffect, useRef } from 'react';
import styles from './vidcall.module.css'

export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div className={styles.videocontainer}>
      <div
        ref={ref}
        style={{ width: '100%', height: '90%' }}
        ></div>
        Uid: {user.uid}
    </div>
  );
};