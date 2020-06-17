import { Card, Col, Container } from 'react-bootstrap';
import React from 'react';

export const SingleOpinion = ({ id, mark, content }) => (
  <Container>
    <Col>
      <Card>
        <Card.Header>
          Użytkownik: {id}
          <br />
          <p>wystawiona ocena: {mark} </p>
        </Card.Header>
        <Card.Body>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Container>
);
