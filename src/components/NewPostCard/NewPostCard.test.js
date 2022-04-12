import React from 'react'; 
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

import { NewPostCard } from './NewPostCard';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';

const NewPostCardProvided = () => {
  return (
    <ContextProvider>
      <Theme>
        <NewPostCard />
      </Theme>
    </ContextProvider>
  )
};

describe('New Post Card component', () => {
  it('should render New Post Card component', () => {
    render(<NewPostCardProvided />);
  });

  it('should render text', () => {
    render(<NewPostCardProvided />);

    expect(screen.getByText(/new post/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/say something/i)).toBeInTheDocument();
    expect(screen.getByText(/save post/i)).toBeInTheDocument();
  });

  it('should display required error when field is empty', async () => {
    render(<NewPostCardProvided />);

    fireEvent.submit(screen.getByTestId('testNewPost'));
    expect(await screen.findByText(/post is required/i)).toBeInTheDocument();
  });

  it('should display min length error when password is invalid', async () => {
    render(<NewPostCardProvided />);

    fireEvent.input(screen.getByRole('textbox', { name: /body/i }), {
      target: {
        value: 'tt'
      }
    });

    fireEvent.submit(screen.getByTestId('testNewPost'));

    expect(await screen.findByText(/Post has at least 3 characters./i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /body/i }).value).toBe('tt');
  });
});
