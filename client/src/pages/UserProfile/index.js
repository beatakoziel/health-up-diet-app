import React from 'react';
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import { UserForm } from '../../components/userForm';
import { DailyDemand } from '../../components/daily-demand';


// TODO DELETE
export const UserProfile = () => {
  return (
    <Container className='p-4'>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
              Wypełnij formularz celem przydzielenia idealnej diety
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <UserForm />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
      <DailyDemand />
    </Container>
  );
};
