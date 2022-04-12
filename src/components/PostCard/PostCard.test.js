import React from 'react'; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { PostCard } from './PostCard';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';

const PostCardProvided = ({ post, user}) => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
            <PostCard post={post} user={user} />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Post Card component', () => {

  const mockPost = {
    body: 'Test body post',
    comments: [
      {
        body: 'Test body comment 1',
        post_id: 123,
        timestamp: '2022-03-27T15:49:02.281Z',
        _id: 123,
        user_id: {
          profilePicture: 'https://i.pravatar.cc/50?img=11',
          username: 'User comment',
          _id: 123
        }
      },
      {
        body: 'Test body comment 2',
        post_id: 123,
        timestamp: '2022-04-27T15:49:02.281Z',
        _id: 123,
        user_id: {
          profilePicture: 'https://i.pravatar.cc/50?img=12',
          username: 'User comment',
          _id: 123
        }
      }
    ],
    likes: [123, 456, 789],
    timestamp: '2022-01-27T14:39:02.281Z',
    user_id: {
      profilePicture: 'https://i.pravatar.cc/50?img=57',
      username: 'Test user',
      _id: 123
    },
    _id: 123
  };

  const mockUser = {
    profilePicture: 'https://i.pravatar.cc/50?img=57',
    username: 'testUser',
    _id: 123
  };

  it('should render Post Card component', () => {
    render(<PostCardProvided post={mockPost} user={mockUser} />);
  });

  it('should render post card properly', () => {
    render(<PostCardProvided post={mockPost} user={mockUser} />);

    expect(screen.getByText(/testUser/i)).toBeInTheDocument();
    expect(screen.getByText(/posted: 27-1-2022 15:39/i)).toBeInTheDocument();
    expect(screen.getByText(/test body post/i)).toBeInTheDocument();
    expect(screen.getByText(/3 people like this/i)).toBeInTheDocument();
    expect(screen.getAllByText(/user comment/i)).toHaveLength(2);
    expect(screen.getByText(/commented: 27-3-2022 17:49/i)).toBeInTheDocument();
    expect(screen.getByText(/test body comment 1/i)).toBeInTheDocument();
    expect(screen.getByText(/commented: 27-4-2022 17:49/i)).toBeInTheDocument();
    expect(screen.getByText(/test body comment 2/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/leave a comment/i)).toBeInTheDocument();
  });

  it('check links', () => {
    render(<PostCardProvided post={mockPost} user={mockUser} />);

    const userPic = screen.getAllByAltText(/user/i);
    const [picLink, nameLink] = screen.getAllByRole('link');

    expect(userPic[0].src).toContain(mockUser.profilePicture);
    expect(picLink).toHaveAttribute('href', `/profile/${mockUser.username}`);
    expect(nameLink).toHaveAttribute('href', `/profile/${mockUser.username}`);
  });
});
