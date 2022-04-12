import React from 'react'; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { Chat } from './Chat';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';

const ChatProvided = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
          <Chat />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Chat component', () => {
    
  it('should render Chat component', () => {
    render(<ChatProvided />);
  });

  it('should render chat properly', () => {
    render(<ChatProvided />);
    
    expect(screen.getByPlaceholderText(/say something/i)).toBeInTheDocument();
    expect(screen.getByText(/send/i)).toBeInTheDocument();
  });
});
