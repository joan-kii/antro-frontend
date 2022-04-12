import React from 'react'; 
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { Profile } from './Profile';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';


const ProfileProvided = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
          <Profile />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Profile component', () => {
    
  it('should render Profile component', () => {
    render(<ProfileProvided />);
  });
});
