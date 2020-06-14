import React, { createContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { getAndCheckUserRole } from '../helpers/apiCommands';
import { LOGIN_ACTION } from './types';

export const INITIAL_CONTEXT = {
  jwt: '',
  isAuthenticated: false,
  userRole: '',
  isModalOpen: false,
};

export const AuthorizationContext = createContext(INITIAL_CONTEXT);

export const AuthorizationContextProvider = props => {
  const [authData, dispatch] = useReducer(reducer, INITIAL_CONTEXT);

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
