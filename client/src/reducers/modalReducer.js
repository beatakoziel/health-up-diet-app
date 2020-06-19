import { CLOSE_MODAL, OPEN_MODAL } from '../types/action.types';

export const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      throw new Error();
  }
};
