import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AccessPageStyled, AccessForms } from './AccessPage.styled';
import { LoginForm } from '../LoginForm/LoginForm';
import { SignupForm } from '../SignupForm/SignupForm';
import { Context, useAuth } from '@utils';
import { CustomLink, BackgroundScene, NoticeComponent } from '@components';


const AccessPage = () => {

  const { toggleAccess, currentUser } = useContext(Context);
  const navigate  = useNavigate();
  const { wakeupServer } = useAuth();
  const [isServerReady, setIsServerReady] = useState(false);

  useEffect(() => {
    const callServer = async () => {
      const ready = await wakeupServer();
      setIsServerReady(ready);
    };

    callServer();
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentUser) {
      setIsServerReady(true);
      navigate('/');
    }
    //eslint-disable-next-line
  }, [currentUser])

  return (
    <AccessPageStyled>
      <BackgroundScene />  {/* comment this before running tests */}
      <AccessForms>
        <h1>Welcome to Antro</h1> 
        {!isServerReady && <NoticeComponent text='Waking up...'/>}
        {toggleAccess ? <SignupForm /> : <LoginForm />}
        <div 
        style={{
          'display': 'flex', 
          'flexDirection': 'column', 
          'marginTop': '1em'
          }}>
          <p>{!toggleAccess ? "Don't have an account?" : 'Already registered?'}</p>
          <CustomLink  
            text={!toggleAccess ? 'Create Account' : 'Login'} />
        </div>
      </AccessForms>
    </AccessPageStyled>
  )
}

export { AccessPage };
