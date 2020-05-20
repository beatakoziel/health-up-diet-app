import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { CalculateInput, CalculateOutput, SexCheckbox } from '../Input';

export const BMI = () => {
  const [data, setData] = useState({ weight: 0, height: 0 });
  const [bmi, setBmi] = useState(0);

  const calculate = () => {};

  const setValues = event => {
    setData({ ...data, [event.target.name]: Number(event.target.value) });
  };

  useEffect(() => {
    if (data.weight > 0 && data.height > 0) {
      setBmi((data.weight / Math.pow(data.height, 2)) * 10000);
    }
    calculate();
  }, [data]);

  return (
    <Container className='shadow-lg p-3 my-3'>
      <h1>Kalkulator BMI</h1>

      <Row xs={1} md={2}>
        <Col className='d-flex flex-column justify-content-between'>
          <SexCheckbox />

          <div>
            <CalculateInput
              title='Waga'
              name='weight'
              placeholder='To zostanie naszą tajemnicą'
              unit='kg'
              setValues={setValues}
            />
            <CalculateInput
              title='Wzrost'
              name='height'
              placeholder='Od stóp do głów'
              unit='cm'
              setValues={setValues}
            />
          </div>

          <CalculateOutput value={bmi} placeholder='Będzie dobrze' />
        </Col>
        <Col>
          <P>mniej niż 16 - wygłodzenie</P>
          <P>16 - 16.99 - wychudzenie</P>
          <P>17 - 18.49 - niedowaga</P>
          <P>18.5 - 24.99 - wartość prawidłowa</P>
          <P>25 - 29.99 - nadwaga</P>
          <P>30 - 34.99 - I stopień otyłości</P>
          <P>35 - 39.99 - II stopień otyłości</P>
          <P>powyżej 40 - otyłość skrajna</P>
        </Col>
      </Row>
    </Container>
  );
};

export const P = styled.p`
  font-size: 0.9em;
  margin: 3px 0 3px 0;
`;
