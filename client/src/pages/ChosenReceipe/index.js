import * as React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';

import { ReceipeDiv } from '../../components/Receipe';
import { SingleOpinion } from '../../components/Opinion';
import { receipes } from '../../data/ReceipesTemp';
import { topinions } from '../../data/OpinionsTemp';

export class ChosenReceipe extends React.Component {
  state = {
    receipe: null,
    opinion: null,
    formcontent: '',
  };

  componentDidMount = () => {
    const receipe = receipes.find(
      receipe => receipe.id === Number(this.props.match.params.id)
    );
    this.setState({ receipe: receipe });

    const opinion = topinions.find(
      opinion => opinion.rid === Number(this.props.match.params.rid)
    );
    this.setState({ opinion: opinion });
  };

  updateCredentials = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { receipe, formcontent } = this.state;
    return (
      <Container className='p-2'>
        {receipe && (
          <Row className='flex-column shadow my-3'>
            <ReceipeDiv
              key={receipe.id}
              id={receipe.id}
              name={receipe.name}
              photo={receipe.photo}
              description={receipe.description}
              disable={true}
            />
          </Row>
        )}
        {receipe && (
          <Row className='flex-column shadow my-3'>
            <h6>Przepis</h6>
            <p>{receipe.preparing}</p>
          </Row>
        )}
        {receipe && (
          <Row className='flex-column shadow my-3'>
            <h6>Wymagane składniki</h6>
            <p>{receipe.ingredients}</p>
          </Row>
        )}
        {receipe && (
          <Row className='flex-column shadow my-3'>
            <h6>średnia ocena</h6>
            <h6>{receipe.mark}</h6>
          </Row>
        )}
        <Row className='flex-column shadow my-3'>
          <br />
          <h6>Dodaj opinie</h6>
          <Form>
            <Form.Group>
              <FormControl
                as='textarea'
                value={formcontent}
                name='formcontent'
                onChange={this.updateCredentials}
                placeholder='opinia'
              />
              <br />
              <Form.Label>Wystaw ocenę</Form.Label>
              <Form.Control as='select' size='sm' custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Button onClick={this.addOpinion} variant='primary' type='submit'>
              Wyślij
            </Button>
          </Form>
          <hr />
          <h6>Oceny użytkowników</h6>
          <br />
          <Col className=''>
            {topinions.length > 0 ? (
              topinions.map(opinion => (
                <SingleOpinion
                  key={opinion.id}
                  id={opinion.id}
                  name={opinion.username}
                  mark={opinion.mark}
                  content={opinion.text_content}
                />
              ))
            ) : (
              <>
                <h3>Nie ma tu jeszcze opini</h3>
              </>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
