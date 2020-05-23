import React from 'react';
import { Col } from 'react-bootstrap';
import { MyInput } from '../inputs';

export const LabelData = () => {
  return (
    <Col className='w-25 border border-success'>
      <MyInput value='test' name='test' placeholder='test' readOnly={true} />
    </Col>
  );
};
