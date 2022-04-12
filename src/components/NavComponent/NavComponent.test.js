import React from 'react'; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import { NavComponent } from './NavComponent';
import { Theme } from '@styles/theme';

const NavComponentProvided = ({ children }) => {
  return (
    <Theme>
        <NavComponent>{ children }</NavComponent>
    </Theme>
  )
};

describe('Navigation component', () => {
  it('should render Navigation component', () => {
    render(<NavComponentProvided />);
  });

  it('render links properly', () => {
    render(
      <NavComponentProvided>
        <a href='/'>Feed</a>
        <a href='/'>Profile</a>
        <a href='/'>Settings</a>
        <a href='/'>Bar</a>
      </NavComponentProvided>
    );

    expect(screen.getByText(/feed/i)).toBeInTheDocument();
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });
});
