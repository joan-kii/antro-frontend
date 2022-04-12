import React from 'react'; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { Topbar } from './Topbar';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';

const TopbarProvided = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
            <Topbar />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Topbar component', () => {

  // Audio Player Mocks
  window.HTMLMediaElement.prototype.play = jest.fn();
  window.HTMLMediaElement.prototype.pause = jest.fn(); 

  it('should render Topbar component', () => {
    render(<TopbarProvided />);
  });

  it('should render topbar properly', () => {
    render(<TopbarProvided />);

    expect(screen.getByText(/antro/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
    expect(screen.getByText(/for me/i)).toBeInTheDocument();
    expect(screen.getByText(/becorbal/i)).toBeInTheDocument();
  });

  it('check link', () => {
    render(<TopbarProvided />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
