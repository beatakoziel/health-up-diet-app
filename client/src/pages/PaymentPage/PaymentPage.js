import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Carousel } from 'antd';
import './PaymentPage.css';
import DollarCircleOutlined from "@ant-design/icons/es/icons/DollarCircleOutlined";

export const PaymentPage = () => {
  const handleClick = () => {};

  return (
      <Container className="mt-5" fluid>
        <Carousel autoplay>
          <div>
            <h3><DollarCircleOutlined /> Odkryj korzyści płynące z posiadania konta premium - Przepisy i prestiż <DollarCircleOutlined /> </h3>
            <Button onClick={handleClick} className="nap">KUP PREMIUM!</Button>
          </div>
        </Carousel>
      </Container>
);
};
