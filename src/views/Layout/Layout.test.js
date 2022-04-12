import React from 'react'; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';

/* 
* Comment BackgroundScene component 
* in AccessPage before running tests
*/

const LayoutProvided = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
          <Layout />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Layout component', () => {
    
  it('should render Layout component', () => {
    render(<LayoutProvided />);
  });

  it('should render topbar component', async () => {
    render(<LayoutProvided />);

    expect(await screen.findByText(/antro/i)).toBeInTheDocument();
    expect(await screen.findByText(/logout/i)).toBeInTheDocument();
  });

  it('should render navigation component', async () => {
    render(<LayoutProvided />);

    expect(await screen.findByText(/feed/i)).toBeInTheDocument();
    expect(await screen.findByText(/profile/i)).toBeInTheDocument();
    expect(await screen.findByText(/settings/i)).toBeInTheDocument();
    expect(await screen.findByText(/bar/i)).toBeInTheDocument();
  });
});
