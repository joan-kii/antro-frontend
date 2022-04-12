import React from 'react'; 
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { ContextProvider } from '@utils';
import { Theme } from '@styles/theme';

const LoginFormProvided = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
          <LoginForm />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Login Form', () => {
  it('should render login form', () => {
    render(<LoginFormProvided />);
  })

  it('should display required error when fields are empty', async () => {
    render(<LoginFormProvided />);
    fireEvent.submit(screen.getByTestId('testLogin'));
    expect(await screen.findByText(/Username is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
  });

  it('should display required error when fields are invalid', async () => {
    render(<LoginFormProvided />);
    fireEvent.input(screen.getByRole('textbox', { name: /username/i }), {
      target: {
        value: 'test'
      }
    });

    fireEvent.input(screen.getByLabelText('password'), {
      target: {
        value: 'password'
      }
    });

    fireEvent.submit(screen.getByTestId('testLogin'));

    expect(await screen.findByText(/Wrong username or password/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /username/i }).value).toBe('test');
    expect(screen.getByLabelText('password').value).toBe('password');
  });

  it('should display min length error when password is invalid', async () => {
    render(<LoginFormProvided />);
    fireEvent.input(screen.getByRole('textbox', { name: /username/i }), {
      target: {
        value: 'test'
      }
    });

    fireEvent.input(screen.getByLabelText('password'), {
      target: {
        value: 'pass'
      }
    });

    fireEvent.submit(screen.getByTestId('testLogin'));

    expect(await screen.findByText(/Password has at least 5 character./i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /username/i }).value).toBe('test');
    expect(screen.getByLabelText("password").value).toBe('pass');
  });
});
