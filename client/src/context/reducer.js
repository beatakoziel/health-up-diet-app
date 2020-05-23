import { LOGIN_ACTION, LOGOUT_ACTION } from './types';
import { INITIAL_AUTH } from './index';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      localStorage.setItem('@token', action.user.jwt);
      return { ...state, isAuthenticated: true, ...action.user };
    case LOGOUT_ACTION:
      localStorage.clear();
      return INITIAL_AUTH;
    default:
      return state;
  }
};
