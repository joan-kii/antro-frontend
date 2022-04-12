import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AudioControls } from './AudioControls';
import { Theme } from '../../styles/theme';

const AudioControlsStyled = () => {
  return (
    <Theme>
      <AudioControls />
    </Theme>
  )
};

describe('AudioControl', () => {
  it('should render audio controls', () => {

    render(<AudioControlsStyled />);
    
    expect(screen.getByLabelText('Prev')).toBeInTheDocument();
    expect(screen.getByLabelText('Next')).toBeInTheDocument();
    expect(screen.getByLabelText('Play')).toBeInTheDocument();
  });
});
