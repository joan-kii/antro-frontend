import React, { useEffect, useContext, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { LayoutStyled, LayoutContent, MainContentStyled } from './Layout.styled';
import { Topbar, BackgroundScene, NavComponent } from '@components';
import { Context } from '@utils';

const Layout = () => {

  const { currentUser, isProfile, setIsProfile, 
    isFeed, setIsFeed } = useContext(Context);

  const path = window.location.pathname;

  useEffect(() => {}, [isProfile, isFeed])

  const feedRef = useRef(null);
  const profileRef = useRef(null);
  const settingsRef = useRef(null);
  const barRef = useRef(null);
  
  const toggleClass = (e) => {
    
    setIsFeed(false);
    setIsProfile(false);
    feedRef.current.className = '';
    profileRef.current.className = '';
    settingsRef.current.className = '';
    barRef.current.className = '';

    const tab = e.target.textContent.toLowerCase();

    switch (tab) {
      case 'profile': 
        profileRef.current.className = 'active';
        break;
      case 'settings': 
        settingsRef.current.className = 'active';
        break;
      case 'bar': 
        barRef.current.className = 'active';
        break;
      default:
        feedRef.current.className = 'active';
    }
  };
  
  return (
    <LayoutStyled>
      <BackgroundScene />  {/* comment this before running tests */}
      <Topbar />
      <LayoutContent>
        <NavComponent>
          <Link 
            ref={feedRef}
            className={path.length === 1 ? 'active' : ''}
            onClick={(e) => toggleClass(e)}
            to={"/"} >Feed</Link>
          <Link 
            ref={profileRef}
            className={path.includes('profile') ? 'active' : ''}
            onClick={(e) => toggleClass(e)}
            to={"/profile/" + currentUser?.username} >Profile</Link>
          <Link 
            ref={settingsRef}
            className={path.includes('settings') ? 'active' : ''}
            onClick={(e) => toggleClass(e)}
            to="/user/settings" >Settings</Link>
          <Link 
            ref={barRef}
            className={path.includes('bar') ? 'active' : ''}
            onClick={(e) => toggleClass(e)}
            to="/bar" >Bar</Link>
        </NavComponent>
        <MainContentStyled>
          <Outlet />
        </MainContentStyled>
      </LayoutContent>
    </LayoutStyled>
  )
};

export { Layout };
