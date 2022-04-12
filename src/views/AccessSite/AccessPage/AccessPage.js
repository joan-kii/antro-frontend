import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AccessPageStyled, AccessForms } from './AccessPage.styled';
import { LoginForm } from '../LoginForm/LoginForm';
import { SignupForm } from '../SignupForm/SignupForm';
import { Context } from '@utils';
import { CustomLink, BackgroundScene } from '@components';


const AccessPage = () => {

  const { toggleAccess, currentUser } = useContext(Context);
  const navigate  = useNavigate();

  useEffect(() => {
    if (currentUser) navigate('/');
    //eslint-disable-next-line
  }, [currentUser])

  return (
    <AccessPageStyled>
      <BackgroundScene />  {/* comment this before running tests */}
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
      </AccessForms>
    </AccessPageStyled>
  )
}

export { AccessPage };
