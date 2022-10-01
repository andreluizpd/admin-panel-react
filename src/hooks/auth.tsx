import { useMutation } from '@tanstack/react-query';
import React, { createContext, useContext, useState } from 'react';
import { logIn } from '../api';
import { loginDto } from '../types/user';

interface AuthContextData {
  token: string;
  userIsLogged: boolean;
  isLoading: boolean;
  logInUser: (logInDto: loginDto) => void;
  logOutUser: () => void;
}

const AuthContext = createContext({} as AuthContextData);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnRhdG9Ac2FudGFjYXRhcmluYWVjby5jb20uYnIiLCJpYXQiOjE2NjQ2NDMwNjcsImV4cCI6MTY2NzIzNTA2N30.GEQh_3Pq4XVnvvTlIeswae9T363FFgtAhN4ODQPddHk'
  );
  const [userIsLogged, setUserIsLogged] = useState(true);

  const { isLoading, mutate } = useMutation(logIn, {
    onSuccess: data => {
      setToken(data.accessToken);
      setUserIsLogged(true);
    },
  });

  const logInUser = (logInDto: loginDto) => {
    mutate(logInDto);
  };

  const logOutUser = () => {
    setToken('');
    setUserIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoading,
        userIsLogged,
        logInUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
