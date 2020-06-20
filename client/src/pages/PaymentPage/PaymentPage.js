import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Carousel } from 'antd';
import './PaymentPage.css';
import DollarCircleOutlined from '@ant-design/icons/es/icons/DollarCircleOutlined';
import { postPay } from '../../helpers/apiCommands';

export const PaymentPage = () => {
  const handleClick = () => {
    postPay({ totalPrice: '200' })
      .then(res => {
        console.log(res);
        window.location.assign(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Container className='mt-5' fluid>
      <Carousel autoplay>
        <div>
          <h3>
            <DollarCircleOutlined /> Odkryj korzyści płynące z posiadania konta
            premium - Przepisy i prestiż <DollarCircleOutlined />{' '}
          </h3>
          <Button onClick={handleClick} className='nap'>
            KUP PREMIUM!
          </Button>
        </div>
      </Carousel>
    </Container>
  );
};
