import React  from 'react';
import { Link } from 'react-router-dom';

import { ProfileCardStyled, ProfileHeaderStyled, FriendsList,
  RequestStyled } from './ProfileCard.styled';
import { Button } from '@components';
import { useUserFetch, getFormattedDate } from '@utils';
import { HeadingStyled, PicLinkStyled, LinkStyled } from '@styles';

const ProfileCard = ({user, isLoggedUser, setAcceptingFriend}) => {

  const { friends, friendshipRequests, _id, profilePicture, 
    name, username, bio, userSince} = user;

  const { acceptFriend } = useUserFetch();

  const renderFriends = friends.length > 0 ? true : false;
  const renderFriendshipReq = friendshipRequests.length > 0 ? true : false;

  const handleFriendship = async (friendId) => {
    const res = await acceptFriend(_id, friendId);
    if (res) setAcceptingFriend(true);
    return;
  };

  return (
    <ProfileCardStyled>
      <ProfileHeaderStyled>
        <PicLinkStyled>
          <a href={`/profile/${username}`} >
            <img alt='User' src={profilePicture} />  
          </a>
        </PicLinkStyled>
        <div>
          <h3>Name: <span>{name}</span></h3>
          <h4>Username: <span>{username}</span></h4>
          <h4>Bio: <span>{bio}</span></h4>
          <h4>User since: <span>{getFormattedDate(userSince)}</span></h4>
        </div>
      </ProfileHeaderStyled>
      {renderFriends && <FriendsList >
        <HeadingStyled>Friends</HeadingStyled>
        <div>
          {renderFriends && friends.map((friend, key) => {
            return (
              <div key={key}>
                <PicLinkStyled>
                  <Link to={"/profile/" + friend.friend.username}>
                    <img alt='user' src={friend.friend.profilePicture} />
                  </Link>
                </PicLinkStyled>
                <LinkStyled>
                  <Link to={"/profile/" + friend.friend.username}>
                    <p>{friend.friend.username}</p>
                  </Link>
                </LinkStyled>
              </div>
            )
          })}
        </div>
      </FriendsList>}
      {isLoggedUser && renderFriendshipReq &&
      <>
        <HeadingStyled>Friendship Requests</HeadingStyled>
        <RequestStyled>
          {friendshipRequests.map((request, key) => {
            return (
              <div key={key}>
                <PicLinkStyled>
                  <Link to={"/profile/" + request.userRequest.username}>
                    <img alt='user' src={request.userRequest.profilePicture} />
                  </Link>
                </PicLinkStyled>
                <LinkStyled>
                  <Link to={"/profile/" + request.userRequest.username}>
                    <p>{request.userRequest.username}</p>
                  </Link>
                </LinkStyled>
                <Button 
                  type='button' 
                  onClick={() => handleFriendship(request.userRequest._id)} 
                  textButton='Accept' 
                />
              </div>
            )
          })}
        </RequestStyled>
      </>}
    </ProfileCardStyled>
  );
};

export { ProfileCard };
