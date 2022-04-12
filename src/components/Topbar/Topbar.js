import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { TopbarStyled } from './Topbar.styled';
import { Button, AudioPlayer } from '@components';
import { useAuth, playlist, Context } from '@utils';

const Topbar = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();
  const { setIsFeed } = useContext(Context);

  const handleLogout = async () => {
    const res = await logout();
    if (res) navigate('/access');
  };
  
  return (
    <TopbarStyled>
      <Link to="/" onClick={() => setIsFeed(true)} >Antro</Link>
      <AudioPlayer playlist={playlist} />
      <Button 
        type='button' 
        textButton='Logout' 
        onClick={handleLogout} 
        width='50%'
      />
    </TopbarStyled>
  )
};

export { Topbar };
