import React, { createContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { getAndCheckUserRole } from '../helpers/apiCommands';
import { LOGIN_ACTION } from './types';

export const INITIAL_AUTH = {
  jwt: '',
  isAuthenticated: false,
  userRole: '',
};

export const AuthorizationContext = createContext(INITIAL_AUTH);

export const AuthorizationContextProvider = props => {
  const [authData, dispatch] = useReducer(reducer, INITIAL_AUTH);

  useEffect(() => {
    getAndCheckUserRole()
      .then(res => {
        const user = {};
        user.userRole = res.data;
        user.isAuthenticated = true;
        user.jwt = localStorage.getItem('@token');
        dispatch({ type: LOGIN_ACTION, user });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <AuthorizationContext.Provider
      value={{
        authData: authData,
        dispatch: dispatch,
      }}
    >
      {props.children}
    </AuthorizationContext.Provider>
  );
};
