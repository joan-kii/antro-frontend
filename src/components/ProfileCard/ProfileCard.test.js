import React from 'react'; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { ProfileCard } from './ProfileCard';
import { Theme } from '@styles/theme';
import { ContextProvider } from '@utils';

const ProfileCardProvided = ({ user}) => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
            <ProfileCard user={user} />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Post Card component', () => {

  const mockUser = {
    bio: 'Test bio',
    friends: [
      {
        friend: {
          profilePicture: 'https://i.pravatar.cc/50?img=29',
          username: 'Test Friend',
          _id: 789
        },
        friendsSince: '2022-02-03T16:59:29.055Z',
        _id: 456
      }
    ],
    friendshipRequests: [
      {
        friend: {
            profilePicture: 'https://i.pravatar.cc/50?img=55',
            username: 'Test Request User',
            _id: 147
        },
        friendsSince: '2022-02-03T18:52:29.055Z',
        _id: 369
      }
    ],
    posts: [
      {
        body: 'Test body post here',
        timestamp: '2021-12-28T05:21:04.237Z',
        user_id: 987,
        _id: 321,
        likes: [
          654
        ],
        comments: [
          {
            body: 'Test comment',
            post_id: 357,
            timestamp: '2022-03-27T15:49:02.281Z',
            _id: 951,
            user_id: {
              profilePicture: 'https://i.pravatar.cc/50?img=11',
              username: 'Test comment user',
              _id: 963
            }
          }
        ]
      }
    ],
    userSince: '2021-12-28T05:11:14.345Z',
    profilePicture: 'https://i.pravatar.cc/50?img=57',
    username: 'testUser',
    name: 'User Test',
    _id: 123
  };

  it('should render Profile Card component', () => {
    render(<ProfileCardProvided user={mockUser} />);
  });

  it('should render profile card properly', () => {
    render(<ProfileCardProvided user={mockUser} />);

    expect(screen.getByText(/^name:$/i)).toBeInTheDocument();
    expect(screen.getByText(/user test/i)).toBeInTheDocument();
    expect(screen.getByText(/username:/i)).toBeInTheDocument();
    expect(screen.getByText(/testuser/i)).toBeInTheDocument();
    expect(screen.getByText(/bio:/i)).toBeInTheDocument();
    expect(screen.getByText(/test bio/i)).toBeInTheDocument();
    expect(screen.getByText(/user since:/i)).toBeInTheDocument();
    expect(screen.getByText(/28-12-2021 06:11/i)).toBeInTheDocument();
    expect(screen.getByText(/friends/i)).toBeInTheDocument();

  });

  it('check links', () => {
    render(<ProfileCardProvided user={mockUser} />);

    const userPic = screen.getAllByAltText(/user/i);
    const links = screen.getAllByRole('link');

    expect(userPic[0].src).toContain(mockUser.profilePicture);
    expect(userPic[1].src).toContain(mockUser.friends[0].friend.profilePicture);
    expect(links[0]).toHaveAttribute('href', `/profile/${mockUser.username}`);
    expect(links[1]).toHaveAttribute('href', `/profile/${mockUser.friends[0].friend.username}`);
    expect(links[2]).toHaveAttribute('href', `/profile/${mockUser.friends[0].friend.username}`);
  });
});
