import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';

import { InputField, InputError, Button } from '@components';
import { useAuth } from '@utils';
import { Form } from '../AccessPage/AccessPage.styled';

const nameRules = {
    minLength: {
      value: 1,
      message: 'Name has at least 1 character.'
    },
    maxLength: {
      value: 12,
      message: 'Name has 12 characters max.'
    },
    pattern: {
      value: /^[A-Za-z0-9 ]+$/,
      message: 'Name has only alphanumeric characters.'
    },
    required: 'Name is required.'
  };

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
  required: 'Username is required.'
};

const emailRules = {
    minLength: {
      value: 6,
      message: 'Email has at least 6 characters.'
    },
    maxLength: {
      value: 40,
      message: 'Username has 40 characters max.'
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Email format required.'
    },
    required: 'Email is required.'
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
  required: 'Password is required.'
};

const SignupForm = () => {

  const methods = useForm();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const confirmPasswordRules = {
    ...passwordRules,
    validate: (value) => {
      return value === methods.watch('password') || 'Passwords do not match';
    }
  };

  const handleSignup = async (data) => {
    const user = await signup(data);
    if (user) navigate('/');
  };

  return (
    <FormProvider {...methods} >
      <Form onSubmit={methods.handleSubmit(handleSignup)}>
        <InputField 
          inputName='name' 
          inputLabel='Name' 
          type='text'
          rules={nameRules}
        />
        <ErrorMessage 
          errors={methods.formState.errors}
          name='name' 
          render={({ message }) => <InputError error={message} />}
        />
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
          inputName='email' 
          inputLabel='Email' 
          type='text'
          rules={emailRules}
        />
        <ErrorMessage 
          errors={methods.formState.errors}
          name='email' 
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
        <InputField 
          inputName='confirmPassword' 
          inputLabel='Confirm Password'
          type='password'
          rules={confirmPasswordRules}
        />
        <ErrorMessage 
          errors={methods.formState.errors}
          name='confirmPassword' 
          render={({ message }) => <InputError error={message} />}
        />
        <Button 
          type='submit' 
          textButton='Signup' 
          width='100%'
          testid='testSignup' />
      </Form>
    </FormProvider>
  )
};

export { SignupForm };
