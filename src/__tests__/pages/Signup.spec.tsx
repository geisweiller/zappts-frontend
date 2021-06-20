import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import SignUp from '../../pages/Landing/Signup';

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
      signUp: jest.fn(),
    }),
  };
});

describe('SignIn Page', () => {
  it('should be able to signUp', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameField = getByPlaceholderText('Enter your name');
    const emailField = getByPlaceholderText('Enter your username or email');
    const passwordField = getByPlaceholderText('***********');
    const buttonElement = getByText('Sign up');

    fireEvent.change(nameField, { target: { value: 'Arthur Geisweiller' } });
    fireEvent.change(emailField, { target: { value: 'geisweiller@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: 'Test123' } });
    fireEvent.click(buttonElement);
  });

  it('should not be able to signUp with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameField = getByPlaceholderText('Enter your name');
    const emailField = getByPlaceholderText('Enter your username or email');
    const passwordField = getByPlaceholderText('***********');
    const buttonElement = getByText('Sign up');

    fireEvent.change(nameField, { target: { value: 'Arthur Geisweiller' } });
    fireEvent.change(emailField, { target: { value: 'invalidemail.com' } });
    fireEvent.change(passwordField, { target: { value: 'Test3' } });
    fireEvent.click(buttonElement);
  });
});
