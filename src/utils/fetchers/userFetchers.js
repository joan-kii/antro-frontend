import { useContext } from 'react';

import { Context } from '@utils'; 

const useUserFetch = () => {

    const SETTINGS_URL = process.env.REACT_APP_API_USER_SETTINGS;
    const PROFILE_URL = process.env.REACT_APP_API_USER_PROFILE;
    const FEED_URL = process.env.REACT_APP_API_USER_FEED;
    const FRIEND_REQUEST_URL = process.env.REACT_APP_API_FRIEND_REQUEST;
    const ACCEPT_FRIEND_URL = process.env.REACT_APP_API_ACCEPT_FRIEND;

    const { setCurrentUser } = useContext(Context);

    // Post User Settings
    const changeSettings = async (data) => {

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };

    try {
      const response = await fetch(SETTINGS_URL, options);
      const res = await response.json();
      if (res.success) {
        const user = res.payload;
        localStorage.setItem('antroUser', JSON.stringify(user));
        setCurrentUser(JSON.parse(localStorage.getItem('antroUser')));
        return user;
      } else {
        console.log(res.message, 'Error: ', res.error);
        return null;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return null;
    }
  };


  // Get User Profile
  const getUserProfile = async (username) => {

    const options = {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };
    
    try {
      const response = await fetch(PROFILE_URL + '/' + username, options);
      const res = await response.json();
      if (res.success) {
        return { profile: res.payload };
      } else {
        console.log(res.message, 'Error: ', res.error);
        return null;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return null;
    }
  };

  // Fetch User Feed
  const fetchUserFeed = async (userId) => {

    const options = {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };
    
    try {
      const response = await fetch(FEED_URL + userId, options);
      const res = await response.json();
      if (res.success) {
        return res.payload;
      } else {
        console.log(res.message, 'Error: ', res.error);
        return null;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return null;
    }
  };

  // Request Friend
  const addFriends = async (friendship) => {

    const options = {
      method: 'POST',
      body: JSON.stringify(friendship),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };

    try {
      const response = await fetch(FRIEND_REQUEST_URL, options);
      const res = await response.json();
      if (res.success) {
        return res.success;
      } else {
        console.log(res.message, 'Error: ', res.error);
        return false;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return false;
    }
  };

  const acceptFriend = async (userId, friendId) => {
    const data = {userId, friendId};

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };

    try {
      const response = await fetch(ACCEPT_FRIEND_URL, options);
      const res = await response.json();
      if (res.success) {
        return res.success;
      } else {
        console.log(res.message, 'Error: ', res.error);
        return false;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return false;
    }
  };

  return { changeSettings, getUserProfile, 
    fetchUserFeed, addFriends, acceptFriend };

};

export { useUserFetch };
