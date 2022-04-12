import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';

import { InputField, InputError, Button, ButtonGroup } from '@components';
import { useAuth } from '@utils';
import { Form } from '../AccessPage/AccessPage.styled';

const usernameRules = {
  minLength: {
    value: 1,
    message: 'Username has at least 1 character.'
  },
  maxLength: {
    value: 12,
    message: 'Username has 12 characters max.'
  },
  pattern: {
    value: /^[A-Za-z0-9]+$/,
    message: 'Username has only alphanumeric characters.'
  },
  required: 'Username is required'
};

const passwordRules = {
  minLength: {
    value: 5,
    message: 'Password has at least 5 character.'
  },
  maxLength: {
    value: 15,
    message: 'Password has 12 characters max.'
  },
  pattern: {
    value: /^[A-Za-z0-9]+$/,
    message: 'Password has only alphanumeric characters.'
  },
  required: 'Password is required'
};

const LoginForm = () => {

  const methods = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const exampleUserLogin = () => {
    const exampleUserData = {
      username: process.env.REACT_APP_EXAMPLE_USER_USERNAME,
      password: process.env.REACT_APP_EXAMPLE_USER_PASSWORD
    };
    handleLogin(exampleUserData);
  };

  const handleLogin = async (data) => {
    const user = await login(data);
    if (user) {
      setLoginError(false);
      navigate('/');
    } else {
      setLoginError(true);
    }
  };

  const params = new URLSearchParams(window.location.search);
  const username = params.get('name');

  if (username) {
    handleLogin({username, password: username});
  }
   
  return (
    <>
      <FormProvider {...methods} >
        <Form onSubmit={methods.handleSubmit(handleLogin)}>
          <InputField 
            inputName='username' 
            inputLabel='Username' 
            type='text'
            rules={usernameRules}
          />
          <ErrorMessage 
            errors={methods.formState.errors}
            name='username' 
            render={({ message }) => <InputError error={message} />}
          />
          <InputField 
            inputName='password' 
            inputLabel='Password'
            type='password'
            rules={passwordRules}
          />
          <ErrorMessage 
            errors={methods.formState.errors}
            name='password' 
            render={({ message }) => <InputError error={message} />}
          />
          <Button 
            type='submit' 
            textButton='Login' 
            width='100%'
            testid='testLogin' />
          {loginError && <InputError error="Wrong username or password" />}
        </Form>
      </FormProvider>
      <ButtonGroup justify='between'>
        <Button 
          type='button' 
          onClick={exampleUserLogin} 
          textButton='Example User Login' />
        <a href={process.env.REACT_APP_API_FACEBOOK_PATH}>
          <Button 
            type='button'
            textButton='Facebook Login' />
        </a>
      </ButtonGroup>
    </>
  )
};

export { LoginForm };
