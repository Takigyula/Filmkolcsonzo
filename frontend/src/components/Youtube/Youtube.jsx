import { fileLoader } from 'ejs';
import React from 'react'
import YouTube from 'react-youtube';

const Youtube = () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://www.youtube.com/watch?v=uYPbbksJxIg
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            muted: 1,
        },
    };
  return (
    <YouTube videoId={film.trailer} opts={opts} onReady={this._onReady} />
  )
}

export default Youtube