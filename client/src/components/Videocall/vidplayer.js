import React, { useEffect, useRef } from 'react';

function Vplayer(user) {
    const ref = useRef();

    useEffect(() => {
        user.videoTrack.play(ref.current);
    }, []);
    return (
        <div>
            Uid: {user.uid}
            <div ref={ref} style={{ width: "200px", height: "200px" }}>
                HI
            </div>
        </div>
    );
}

export default Vplayer;
