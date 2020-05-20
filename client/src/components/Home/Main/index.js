import * as React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Recipes from '../../../resources/img/recipes.png';
import Products from '../../../resources/img/products.jpg';
import Fit from '../../../resources/img/fit.jpeg';
import styled from 'styled-components';

const InformationCart = ({ photo, title, body, button }) => (
  <Card className='my-3'>
    <Card.Img variant='top' src={photo} className='p-3' />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
      <Button variant='outline-success'>{button}</Button>
    </Card.Body>
  </Card>
);

export class Main extends React.Component {
  render() {
    return (
      <ContainerMain>
        <Row>
          <Col className=' my-3 text-center border-bottom border-success'>
            <h1>Dlaczego my ?</h1>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3}>
          <Col>
            <InformationCart
              photo={Recipes}
              title='Najsmaczniejsze przepisy'
              body='Tylko u nas eksperci pracują nad wyrafinowaną kwintesencją smaku naszych potraw'
              button='Gotuj z nami !'
            />
          </Col>
          <Col>
            <InformationCart
              photo={Products}
              title='Najlepsze produkty'
              body='Tylko z nami skomponujesz posiłek który zaspokoi najbardziej wymagające podniebienia '
              button='Szukaj produktów !'
            />
          </Col>
          <Col>
            <InformationCart
              photo={Fit}
              title='Najwyższa kontrola'
              body='Pracuj nad swoim ciałem razem z nami i obserwuj swoje zmiany. Dziś jest TWÓJ dzień'
              button='Zacznij już dziś !'
            />
          </Col>
        </Row>
      </ContainerMain>
    );
  }
}

const ContainerMain = styled(Container)`
  min-height: 100vh;
`;
