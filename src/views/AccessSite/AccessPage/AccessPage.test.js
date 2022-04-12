import React from 'react'; 
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { AccessPage } from './AccessPage';
import { ContextProvider } from '@utils';
import { Theme } from '@styles/theme';

/* 
* Comment BackgroundScene component 
* in AccessPage before running tests
*/

const AccessPageProvided = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
          <AccessPage />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Access Page', () => {
  it('should render Access Page', () => {
    render(<AccessPageProvided />);
  });

  it('should show login form', () => {
    render(<AccessPageProvided />);

    expect(screen.getByText(/welcome to antro/i)).toBeInTheDocument();
    expect(screen.getByText(/example user login/i)).toBeInTheDocument();
    expect(screen.getByText(/facebook login/i)).toBeInTheDocument();
    expect(screen.getByText(/don't have an account/i)).toBeInTheDocument();
    expect(screen.getByText(/create account/i)).toBeInTheDocument();
  });

  it('toggle form should show signup form', async () => {
    render(<AccessPageProvided />);

    fireEvent.click(screen.getByText(/create account/i));

    expect(await screen.findByText(/welcome to antro/i)).toBeInTheDocument();
    expect(await screen.findByText(/signup/i)).toBeInTheDocument();
    expect(await screen.findByText(/already registered?/i)).toBeInTheDocument();
    expect(await screen.findByText(/login/i)).toBeInTheDocument();
  });
})
