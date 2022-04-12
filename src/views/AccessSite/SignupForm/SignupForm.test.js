import React from 'react'; 
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { SignupForm } from './SignupForm';
import { ContextProvider } from '@utils';
import { Theme } from '@styles/theme';

const SignupFormProvided = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Theme>
          <SignupForm />
        </Theme>
      </BrowserRouter>
    </ContextProvider>
  )
};

describe('Signup Form', () => {
  it('should render signup form', () => {
    render(<SignupFormProvided />);
  })

  it('should display required error when fields are empty', async () => {
    render(<SignupFormProvided />);
    fireEvent.submit(screen.getByTestId('testSignup'));
    expect(await screen.findByText(/^name is required.$/i)).toBeInTheDocument();
    expect(await screen.findByText(/username is required./i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required./i)).toBeInTheDocument();
    expect(await screen.findAllByText(/password is required./i)).toHaveLength(2);
  });

  it('should display required error when fields are invalid', async () => {
    render(<SignupFormProvided />);
    fireEvent.input(screen.getByRole('textbox', { name: /^name$/i }), {
      target: {
        value: 'testName!'
      }
    });

    fireEvent.input(screen.getByRole('textbox', { name: /username/i }), {
      target: {
        value: 'testUser!'
      }
    });

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'testEmail'
      }
    });

    fireEvent.input(screen.getByLabelText('password'), {
      target: {
        value: 'testPassword!'
      }
    });

    fireEvent.input(screen.getByLabelText('confirmPassword'), {
      target: {
        value: 'testConfirm!'
      }
    });

    fireEvent.submit(screen.getByTestId('testSignup'));

    expect(await screen.findByText(/^Name has only alphanumeric characters.$/i)).toBeInTheDocument();
    expect(await screen.findByText(/Username has only alphanumeric characters./i)).toBeInTheDocument();
    expect(await screen.findByText(/Email format required./i)).toBeInTheDocument();
    expect(await screen.findAllByText(/Password has only alphanumeric characters./i)).toHaveLength(2);
    expect(screen.getByRole('textbox', { name: /^name$/i }).value).toBe('testName!');
    expect(screen.getByRole('textbox', { name: /username/i }).value).toBe('testUser!');
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('testEmail');
    expect(screen.getByLabelText('password').value).toBe('testPassword!');
    expect(screen.getByLabelText('confirmPassword').value).toBe('testConfirm!');
  });

  it('should display min length error when fields are invalid', async () => {
    render(<SignupFormProvided />);
    fireEvent.input(screen.getByRole('textbox', { name: /^name$/i }), {
      target: {
        value: 'veryLongNameForTesting'
      }
    });

    fireEvent.input(screen.getByRole('textbox', { name: /username/i }), {
      target: {
        value: 'veryLongUsernameForTesting'
      }
    });

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 't@t.c'
      }
    });

    fireEvent.input(screen.getByLabelText('password'), {
      target: {
        value: 'pass'
      }
    });

    fireEvent.input(screen.getByLabelText('confirmPassword'), {
      target: {
        value: 'pass'
      }
    });

    fireEvent.submit(screen.getByTestId('testSignup'));

    expect(await screen.findByText(/^Name has 12 characters max.$/i)).toBeInTheDocument();
    expect(await screen.findByText(/Username has 12 characters max./i)).toBeInTheDocument();
    expect(await screen.findByText(/Email has at least 6 characters./i)).toBeInTheDocument();
    expect(await screen.findAllByText(/Password has at least 5 character./i)).toHaveLength(2);
    expect(screen.getByRole('textbox', { name: /^name$/i }).value).toBe('veryLongNameForTesting');
    expect(screen.getByRole('textbox', { name: /username/i }).value).toBe('veryLongUsernameForTesting');
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('t@t.c');
    expect(screen.getByLabelText('password').value).toBe('pass');
    expect(screen.getByLabelText('confirmPassword').value).toBe('pass');
  });
});