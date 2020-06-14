import React, {useContext} from 'react';
import { Container } from 'react-bootstrap';
import { ProgressCircle } from '../../components/progress-circle/ProgressCircle';
import { Color } from '../../helpers/enums/Colors';
import { ProductTable } from '../../components/product-table/ProductTable';
import {GenericModal} from "../../components/Modal";
import { AuthorizationContext } from '../../context';



export const useOpenModal = () => {
    const {authData, dispatch} = useContext(AuthorizationContext);

    const openModal = () => {
        dispatch({type: 'OPEN_MODAL'});
    };
    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'});
    };
    return [authData, openModal, closeModal]
};

export const DemoPage = () => {

  const [authData, openModal, closeModal] = useOpenModal();

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
        {authData.isModalOpen === true && (
            <GenericModal action={closeModal}>
                <p>sadsad</p>
            </GenericModal>
        )}
    </Container>
  );
};
