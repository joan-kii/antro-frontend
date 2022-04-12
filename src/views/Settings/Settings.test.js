import React from 'react'; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { Settings } from './Settings';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';


const SettingsProvided = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
          <Settings />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Settings component', () => {
    
  it('should render Settings component', () => {
    render(<SettingsProvided />);
  });

  it('should render change picture button', async () => {
    render(<SettingsProvided />);

    expect(await screen.findByText(/change picture/i)).toBeInTheDocument();
    expect(await screen.findByText(/about me/i)).toBeInTheDocument();
  }); 
});
