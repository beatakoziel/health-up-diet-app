import React from 'react';
import { Alert, Button, Card, List } from 'antd';
import { useOpenModal } from '../../hooks/useOpenModal';
import { GenericModal } from '../Modal';

export const MealItem = ({ idMeal: mealId, name, products, deleteMeal }) => {
  const [isModalOpen, openModal, closeModal] = useOpenModal();

  const handleDeleteClick = () => {
    // delete ITEM by ID
    deleteMeal(mealId);
  };

  const handleAddClick = () => {
    // delete ITEM by ID
    console.log(mealId);
    openModal();
  };

  return (
    <React.Fragment>
      <div className='m-2'>
        <Card
          title={name}
          extra={
            <div>
              <Button type='dashed' danger onClick={handleDeleteClick}>
                Usuń
              </Button>
              <Button type='dashed' onClick={handleAddClick}>
                Dodaj
              </Button>
            </div>
          }
          style={{ width: 300 }}
        >
          <List
            size='small'
            bordered
            dataSource={products}
            renderItem={product => (
              <List.Item>
                {product.name} {product.quantity} [{product.unit}]
              </List.Item>
            )}
          />
        </Card>
      </div>
      <GenericModal isShow={isModalOpen} handleClose={closeModal}>
        <Alert
          message='Oznaczono'
          description='Danie zostalo dodane do spożytych produktów'
          type='success'
          showIcon
        />
      </GenericModal>
    </React.Fragment>
  );
};
