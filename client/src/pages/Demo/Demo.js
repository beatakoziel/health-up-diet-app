import React, {useReducer, useState, useEffect} from 'react';
import { Container, Button } from 'react-bootstrap';
import { ProgressCircle } from '../../components/progress-circle/ProgressCircle';
import { Color } from '../../helpers/enums/Colors';
import { ProductTable } from '../../components/product-table/ProductTable';
import {GenericModal} from "../../components/Modal";
import {ProductAdd} from "../../components/product-add/ProductAdd";

const initialModalState = {isModalOpen: false};

function reducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {isModalOpen: true};
        case 'CLOSE_MODAL':
            return {isModalOpen: false};
        default:
            throw new Error();
    }
}

export const useOpenModal = () => {

    const [state, dispatch] = useReducer(reducer, initialModalState);

    const openModal = () => {
        dispatch({type: 'OPEN_MODAL'});
    };
    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'});
    };

    return [state, openModal,closeModal]

};

export const DemoPage = () => {

    const [state, openModal, closeModal] = useOpenModal();

  return (
    <Container>
      <div>
        <h1>Progress circle</h1>
        <ProgressCircle
          name='Tłuszcze'
          actual={97.12}
          dailyNutrients={100}
          color={Color.blue}
        />
      </div>
      <div>
        <h1>Product Table</h1>
        <ProductTable />
      </div>
        <div>
            <button onClick={openModal}>pokaż modal</button>
        </div>
        {state.isModalOpen === true && (
            <GenericModal action={closeModal}>
                <p>sadsad</p>
            </GenericModal>
        )}
    </Container>
  );
};
