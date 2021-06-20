import React, { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';
import { UserContextData, SignUpType, SignInType } from './types/user.model';

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const signUp = async ({ email, password, name }: SignUpType) => {
    const id = Math.random().toString(16).substr(2, 8);
    try {
      const result = await api.post('/users', { id, email, password, name });
      toast.success('Signup was successful');
      history.push('/');
      return result;
    } catch (error) {
      toast.error('There was an error, please try again later.');
      throw error;
    }
  };

  const signIn = async ({ email, password }: SignInType) => {
    try {
      const result = await api.get('/users', { params: { email } });
      if (result.data.length > 0) {
        const isPassword = result.data[0].password;
        if (isPassword && isPassword === password) {
          toast.success('Signin was successful');
          history.push('/signup');
        } else {
          toast.error('Wrong password');
        }
      } else {
        toast.error('There is no account associated with this email');
      }
      return result;
    } catch (error) {
      toast.error('There was an error, please try again later.');
      throw error;
    }
  };

  return <UserContext.Provider value={{ signUp, signIn }}>{children}</UserContext.Provider>;
};

export function useUserContext(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContext must be used within an UserProvider');
  }

  return context;
}
