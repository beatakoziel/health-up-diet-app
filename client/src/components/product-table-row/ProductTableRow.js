import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { addProductToUserDailyCalories } from '../../helpers/apiCommands';
import { useOpenModal } from '../../hooks/useOpenModal';
import { GenericModal } from '../Modal';
import { ProductInf } from '../product-inf/ProductInf';
import { TableMode } from '../../types/enums/Colors';
import { notification } from 'antd';

export const ProductTableRow = props => {
  const [quantity, setQuantity] = useState('');
  const { productId, name, unit, mode, callback } = props;

  const [isModalOpen, openModal, closeModal] = useOpenModal();

  const onChange = event => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    if (quantity[0] === '0' && quantity[1] === '0') {
      setQuantity('0');
      return;
    }
    const value = Number(quantity.replace(',', '.'));
    if (isNaN(value)) {
      setQuantity('0');
    }
  }, [quantity]);

  const showProductInf = () => {
    openModal();
  };

  const openNotification = () => {
    notification.warning({
      key: 'one',
      message: 'Wystąpił błąd',
      description: `Zapomniałeś dodać ilość dla ${name}.`,
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };

  const saveProduct = () => {
    if (quantity.length <= 0 || quantity === '0') {
      openNotification();
    } else {
      if (mode === TableMode.DailyDemand) {
        const postToApi = { productId, quantity: Number(quantity) };
        console.log(postToApi);
        addProductToUserDailyCalories(postToApi)
          .then(() => {
            console.log('ok');
          })
          .catch(err => {
            console.log(err);
          });
      }
      callback({ ...props, quantity: Number(quantity) });
      setQuantity('0');
    }
  };

  return (
    <React.Fragment>
      <InputGroup className='col'>
        <InputGroup.Prepend>
          <InputGroup.Text
            className='btn '
            onClick={showProductInf}
            style={{ width: '150px', fontSize: '12px' }}
          >
            {name}
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl value={quantity} onChange={onChange} placeholder='0' />
        <InputGroup.Append>
          <InputGroup.Text style={{ width: '60px', fontSize: '12px' }}>
            {unit}
          </InputGroup.Text>
          <Button variant='outline-success' onClick={saveProduct}>
            Zapisz
          </Button>
        </InputGroup.Append>
      </InputGroup>

      <GenericModal
        isShow={isModalOpen}
        action={closeModal}
        handleClose={closeModal}
      >
        <ProductInf {...props} />
      </GenericModal>
    </React.Fragment>
  );
};

ProductTableRow.propTypes = {
  callback: PropTypes.func,
  mode: PropTypes.any,
  productId: PropTypes.number.isRequired, //id
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  portionSize: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
};
