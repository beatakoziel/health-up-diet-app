import React, { createContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';

export const INITIAL_AUTH = {
  jwt: '',
  isAuthenticated: false,
  userRole: '',
};

export const AuthorizationContext = createContext(INITIAL_AUTH);

export const AuthorizationContextProvider = props => {
  const [authData, dispatch] = useReducer(reducer, INITIAL_AUTH);

  useEffect(() => {

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
