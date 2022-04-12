import React, { useState, useEffect, useRef } from 'react';

import { AudioPlayerStyled, TrackInfoStyled } from './AudioPlayer.styled';
import { AudioControls } from './AudioControls';

const AudioPlayer = ({ playlist }) => {

  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const isReady = useRef(false);
  const intervalRef = useRef();

  const { title, artist, color, audioSrc } = playlist[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
    // eslint-disable-next-line
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }

    // eslint-disable-next-line
  }, [trackIndex])

  useEffect(() => {

    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, [])

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) toNextTrack();
    }, [1000])

  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(playlist.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };
  
  const toNextTrack = () => {
    if (trackIndex + 1 > playlist.length - 1) {
      setTrackIndex(0);
    } else {
      setTrackIndex(trackIndex + 1);
    }
  };

  return (
    <AudioPlayerStyled 
      artistColor={color}
      isPlaying={isPlaying} >
      <TrackInfoStyled>
        <AudioControls 
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <h2>{title}</h2>
        <h3>{artist}</h3>
      </TrackInfoStyled>
    </AudioPlayerStyled>
  )
};

export { AudioPlayer };
