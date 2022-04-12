import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AudioPlayer } from './AudioPlayer';
import { playlist } from '@utils/playlist/playlist';
import { Theme } from '@styles/theme';

const AudioPlayerStyled = () => {
  return (
    <Theme>
      <AudioPlayer playlist={playlist} />
    </Theme>
  )
};

describe('AudioPlayer', () => {
  it('should render audio player', () => {

    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();

    render(<AudioPlayerStyled />);

    const songTitle = screen.getByText(/for me/i);
    expect(songTitle).toBeInTheDocument();
    
    const artistName = screen.getByText(/becorbal/i);
    expect(artistName).toBeInTheDocument();
  });
});
