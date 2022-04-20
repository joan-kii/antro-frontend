import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AccessPageStyled, AccessForms } from './AccessPage.styled';
import { LoginForm } from '../LoginForm/LoginForm';
import { SignupForm } from '../SignupForm/SignupForm';
import { Context, useUserFetch } from '@utils';
import { CustomLink, BackgroundScene, NoticeComponent } from '@components';


const AccessPage = () => {

  const { toggleAccess, currentUser } = useContext(Context);
  const navigate  = useNavigate();
  const { wakeupServer }  = useUserFetch();
  const [isServerReady, setIsServerReady] = useState(false);

  useEffect(() => {
    const wakingup = async () => {
      const awake = wakeupServer();
      setIsServerReady(awake);
    };
    
    wakingup();
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentUser) navigate('/');
    //eslint-disable-next-line
  }, [currentUser])

  return (
    <AccessPageStyled>
      <BackgroundScene />  {/* comment this before running tests */}
      {isServerReady ? 
        <AccessForms>
          <h1>Welcome to Antro</h1> 
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
        </AccessForms> :
        <NoticeComponent text='Wait, waking up...'/>}
    </AccessPageStyled>
  )
}

export { AccessPage };
