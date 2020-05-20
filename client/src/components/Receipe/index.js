import { Button, Card, Col } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

export const ReceipeDiv = ({
  id,
  name,
  photo,
  description,
  mark,
  ingredients,
  preparing,
  disable = false,
}) => {
  return (
    <Col>
      <Card className='my-2 mx-auto' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            {!disable && (
              <Link to={`/przepisy/${id}`}>
                <Button>Więcej</Button>
              </Link>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
