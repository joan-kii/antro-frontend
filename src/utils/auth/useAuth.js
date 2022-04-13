import { useContext } from "react";

import { Context, randomNumber } from '@utils';

const useAuth = () => {

  const LOGIN_URL = process.env.REACT_APP_API_LOGIN_PATH;
  const LOGOUT_URL = process.env.REACT_APP_API_LOGOUT_PATH;
  const SIGNUP_URL = process.env.REACT_APP_API_SIGNUP_PATH;
  const AVATAR_URL = process.env.REACT_APP_AVATAR_API;

  const { setCurrentUser } = useContext(Context);
  
  // Login
  const login = async (data) => {

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
      const response = await fetch(LOGIN_URL, options);
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

  // Logout
  const logout = async () => {

    const options = {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };

    try {
      const response = await fetch(LOGOUT_URL, options)
      const res = await response.json();
      if (res.success) {
        localStorage.removeItem('antroUser');
        setCurrentUser(null);
        return res.success;
      }
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return null;
    }
  };

  // Signup
  const signup = async (data) => {

    const signupData = {
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      profilePicture: AVATAR_URL + randomNumber(70)
    }; 

    const options = {
      method: 'POST',
      body: JSON.stringify(signupData),
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors'
    };
    
    try {
      const response = await fetch(SIGNUP_URL, options);
      const res = await response.json();
      if (res.success) {
        const user = res.payload;
        const loginOptions = {
          username: user.username,
          password: user.password
        };
        try {
          const resLogin = await login(loginOptions);
          if (resLogin.success) {
            const { userLogged } = resLogin.payload;
            localStorage.setItem('antroUser', JSON.stringify(userLogged));
            setCurrentUser(localStorage.getItem('antroUser'));
            return userLogged;
          } else {
            console.log(res.message, 'Error: ', res.error);
            return null;
          }
        } catch (err) {
          console.log('Unfulfilled Request', err);
          return null;
        }
      } 
    } catch(err) {
      console.log('Unfulfilled Request', err);
      return null;
    }
  };

  return { login, logout, signup };
};

export { useAuth };
