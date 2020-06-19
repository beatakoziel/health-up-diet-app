import { useReducer } from 'react';
import { modalReducer } from '../reducers/modalReducer';
import { CLOSE_MODAL, OPEN_MODAL } from '../types/action.types';

export const useOpenModal = () => {
  const [isModalOpen, dispatch] = useReducer(modalReducer, false);

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return [isModalOpen, openModal, closeModal];
};
