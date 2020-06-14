import { LOGIN_ACTION, LOGOUT_ACTION } from './types';
import { INITIAL_CONTEXT } from './index';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      localStorage.setItem('@token', action.user.jwt);
      return { ...state, isAuthenticated: true, ...action.user };
    case LOGOUT_ACTION:
      localStorage.clear();
      return INITIAL_CONTEXT;
    case 'OPEN_MODAL':
      return {...state, isModalOpen: true};
    case 'CLOSE_MODAL':
      return {...state, isModalOpen: false};
    default:
      return state;
  }
};
