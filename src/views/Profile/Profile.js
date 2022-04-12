import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { NewPostCard, PostCard, ProfileCard, 
  Button, NoticeComponent } from '@components';
import { Context, useUserFetch } from '@utils';
import { HeadingStyled } from '@styles';
import { AddFriends } from './Profile.styled';

const Profile = () => {

  const { savingPost, currentUser } = useContext(Context);
  const { getUserProfile, addFriends } = useUserFetch();

  const { usernameParam } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedUser, setIsLoggedUser] = useState(false);
  const [alreadyFriends, setAlreadyFriends] = useState(false);
  const [pendingFriends, setPendingFriends] = useState(false);
  const [requestingFriends, setRequestingFriends] = useState(false);
  const [acceptingFriend, setAcceptingFriend] = useState(false);

  useEffect(() => {
    
    const getUser = async () => {
      const { profile } = await getUserProfile(usernameParam);
      setUser(profile);
      setPosts(profile.posts);
      setLoading(false);
      if (profile.username === currentUser.username) {
        setIsLoggedUser(true);
      } else {
        profile.friends?.forEach((friend) => {
          if (friend.friend._id === currentUser.userId) {
            setAlreadyFriends(true);
          }
        })
        profile.friendshipRequests?.forEach((request) => {
          if (request.userRequest === currentUser.userId) {
            setPendingFriends(true);
          }
        })
        setIsLoggedUser(false);
      }
    };

    getUser();
    // eslint-disable-next-line
  }, [savingPost, requestingFriends, 
    pendingFriends, acceptingFriend, usernameParam])

  const friendRequest = async () => {
    const friendship = {
      userId:currentUser.userId, 
      friendId:user._id
    };
    const res = await addFriends(friendship);
    if (res) {
      setPendingFriends(true);
      setRequestingFriends(true);
    }
    return;
  }; 

  return (
    <>
      {!loading && user ? 
        <div>
          <AddFriends>
            {!isLoggedUser && pendingFriends && <NoticeComponent text="Friendship Requested" />}
            {!isLoggedUser && alreadyFriends && <NoticeComponent text="Friends!" />}
            {!isLoggedUser && !alreadyFriends && !pendingFriends &&
              <Button type='button' onClick={friendRequest} textButton='Add to my friends' />}
          </AddFriends>
          {isLoggedUser && <NewPostCard />}
          <ProfileCard 
            user={user} 
            isLoggedUser={isLoggedUser} 
            setAcceptingFriend={setAcceptingFriend} />
          <div>
            {posts.length > 0 && <HeadingStyled>User Posts</HeadingStyled>}
            {posts && posts.map((post, key) => {
              return <PostCard key={key} post={post} user={user} />
            })}
          </div>
        </div> :
        <NoticeComponent text="Loading..." />
      }
    </>
  )
};

export { Profile };
