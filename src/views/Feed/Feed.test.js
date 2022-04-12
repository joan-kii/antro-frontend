import React from 'react'; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { Feed } from './Feed';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';

const FeedProvided = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
          <Feed />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Feed component', () => {
    
  it('should render Feed component', () => {
    render(<FeedProvided />);
  });

  it('should render new post card component', async () => {
    render(<FeedProvided />);

    expect(await screen.findByText(/new post/i)).toBeInTheDocument();
    expect(await screen.findByPlaceholderText(/say something/i)).toBeInTheDocument();
    expect(await screen.findByText(/save post/i)).toBeInTheDocument();
  });

  it('should render notice component', async () => {
    render(<FeedProvided />);

    expect(await screen.findByText(/there are no posts to show/i)).toBeInTheDocument();
  });
});
