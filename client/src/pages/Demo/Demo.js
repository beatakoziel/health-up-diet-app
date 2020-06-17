import React from 'react';
import { Container } from 'react-bootstrap';
import { ProgressCircle } from '../../components/progress-circle/ProgressCircle';
import { Color } from '../../types/enums/Colors';
import { ProductTable } from '../../components/product-table/ProductTable';
import { GenericModal } from '../../components/Modal';
import { useOpenModal } from '../../hooks/useOpenModal';
import {DailyProductsTable} from "../../components/daily-products-table/dailyTable";

export const DemoPage = () => {
  const [isModalOpen, openModal, closeModal] = useOpenModal();

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
      <div>
          <h1>Daily Products</h1>
          <DailyProductsTable/>
      </div>

      <GenericModal
        action={closeModal}
        isShow={isModalOpen}
        handleClose={closeModal}
      >
        <p>modal test</p>
      </GenericModal>
    </Container>
  );
};
