import React from 'react';

import { ReactComponent as Play } from '../../assets/play-button.svg';
import { ReactComponent as Pause } from '../../assets/pause-button.svg';
import { ReactComponent as Next } from '../../assets/next-button.svg';
import { ReactComponent as Prev } from '../../assets/prev-button.svg';
import { AudioControlsStyled, NextPrevStyled,
  PlayPauseStyled } from './AudioControls.styled';

const AudioControls = ({ 
  isPlaying, 
  onPlayPauseClick, 
  onPrevClick, 
  onNextClick 
  }) => {
    return (
      <AudioControlsStyled>

        <NextPrevStyled 
          type='button'
          aria-label='Prev'
          onClick={onPrevClick}>
          <Prev />
        </NextPrevStyled>

        {isPlaying ? (
          <PlayPauseStyled
            button='button'
            aria-label='Pause'
            onClick={() => onPlayPauseClick(false)} >
            <Pause />
          </PlayPauseStyled>
        ) : (
          <PlayPauseStyled
            button='button'
            aria-label='Play'
            onClick={() => onPlayPauseClick(true)} >
            <Play />
          </PlayPauseStyled>
        )}

        <NextPrevStyled 
          type='button'
          aria-label='Next'
          onClick={onNextClick}>
          <Next />
        </NextPrevStyled>

      </AudioControlsStyled>
    )
};

export { AudioControls };
