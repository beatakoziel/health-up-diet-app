import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initData = {
  token: '',
  isAuthenticated: false,
};

export const AuthorizationContext = createContext(initData);

export const AuthorizationContextProvider = props => {
  const [authData, dispatch] = useReducer(reducer, initData);

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
