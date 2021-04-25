import React from 'react';
import YouTube from 'react-youtube';

export default function YoutubePlayer(props) {
    const opts = {
        height: '350',
        width: '600',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <div style={{ maxWidth: '100%' }}>
            <YouTube videoId={props.videoId ?? "NqfJUdLitsQ"} opts={opts} containerClassName="video-container" />
        </div>
    );

}