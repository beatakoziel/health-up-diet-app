import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { Button, Input, List } from 'antd';
import { notification } from 'antd';
import { postMeal } from '../../helpers/apiCommands';

export const MealAdd = ({
  products,
  addMeal,
  deleteProducts,
  deleteAllProducts,
}) => {
  const [name, setName] = useState('');

  const openNotification = () => {
    notification.warn({
      key: 'down-left',
      message: `Hola hola !`,
      description: 'Wprowadź poprawne dane',
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };

  const mealInput = (
    <div>
      <Badge variant='primary'>Dodane produkty:</Badge>
    </div>
  );

  const handleChange = event => {
    setName(event.target.value);
  };

  const submit = () => {
    // POST TO API
    if (name.length > 0 && products.length > 0) {
      console.log(products);
      postMeal({ name, products }).then(res => {
        addMeal({ mealId: res.data, name, products });
        deleteAllProducts();
        setName('');
      });
    } else {
      openNotification();
    }
  };

  return (
    <div className='col m-2'>
      <Input
        value={name}
        onChange={handleChange}
        placeholder='Wybierz nazwę posiłku'
      />
      <List
        size='small'
        header={mealInput}
        footer={<Button onClick={submit}>Zapisz</Button>}
        bordered
        dataSource={products}
        renderItem={product => (
          <List.Item>
            <div>
              {product.name} {product.quantity} [{product.unit}]
            </div>
            <Button onClick={() => deleteProducts(product.productId)} danger>
              -
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};
