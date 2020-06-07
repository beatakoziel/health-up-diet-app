import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import {addProductToUserDailyCalories} from "../../helpers/apiCommands";

export const ProductTableRow = props => {
  const [quantity, setQuantity] = useState('');
  const { productId, name, unit, category } = props;

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

  const showProductInf = () => {};

  const saveProduct = () => {
     const postToApi = { productId, quantity };
     console.log(postToApi);
    addProductToUserDailyCalories(postToApi)
        .then((res) => {
          console.log("ok");
          window.location.reload();

        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <InputGroup className='mb-3'>
      <InputGroup.Prepend>
        <InputGroup.Text className='btn' onClick={showProductInf}>
          {name}
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl value={quantity} onChange={onChange} placeholder='0' />
      <InputGroup.Append>
        <InputGroup.Text>{unit}</InputGroup.Text>
        <Button variant='outline-success' onClick={saveProduct}>
          Zapisz
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

ProductTableRow.propTypes = {
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
