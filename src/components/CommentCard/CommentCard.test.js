import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { CommentCard } from './CommentCard';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';

const CommentCardStyled = ({ comment }) => {
  
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
          <CommentCard comment={comment} />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('CommentCard', () => {
  it('should render comment card', () => {

    const mockComment = {
      user_id: {
        username: 'joankii',
        profilePicture: 'https://i.pravatar.cc/50?img=29',
      },
      timestamp: '2021-12-28T05:09:30.700+00:00',
      body: 'Hey there!'
    };

    render(<CommentCardStyled comment={mockComment} />);

    const userPic = screen.getByAltText(/user/i);
    const [picLink, nameLink] = screen.getAllByRole('link');

    expect(userPic.src).toContain(mockComment.user_id.profilePicture);
    expect(picLink).toHaveAttribute('href', `/profile/${mockComment.user_id.username}`);
    expect(nameLink).toHaveAttribute('href', `/profile/${mockComment.user_id.username}`);
    expect(screen.getByText(/joankii/i)).toBeInTheDocument();
    expect(screen.getByText(/hey there!/i)).toBeInTheDocument();
    expect(screen.getByText(/28-12-2021 06:09/i)).toBeInTheDocument();
  });
});