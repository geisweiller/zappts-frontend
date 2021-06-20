import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import SignIn from '../../pages/Landing/SignIn';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/userContext', () => {
  return {
    useUserContext: () => ({
      signIn: jest.fn(),
    }),
  };
});

describe('SignIn Page', () => {
  it('should be able to sign', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('Enter your username or email');
    const passwordField = getByPlaceholderText('Enter your password');
    const buttonElement = getByText('Sign in');

    fireEvent.change(emailField, { target: { value: 'geisweiller@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: 'Test123' } });
    fireEvent.click(buttonElement);
  });

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('Enter your username or email');
    const passwordField = getByPlaceholderText('Enter your password');
    const buttonElement = getByText('Sign in');

    fireEvent.change(emailField, { target: { value: 'invalid@teste.com' } });
    fireEvent.change(passwordField, { target: { value: 'Test321' } });
    fireEvent.click(buttonElement);
  });
});
