import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { ReceipeDiv } from '../../components/Receipe';
import { receipes } from '../../data/ReceipesTemp';

export class ChosenReceipe extends React.Component {
  state = {
    receipe: null,
/*    opinion: null,*/
/*    formcontent: '',*/
  };

  componentDidMount = () => {
    const receipe = receipes.find(
        receipe => receipe.id === Number(this.props.match.params.id)
    );
    this.setState({ receipe: receipe });
  };

  updateCredentials = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { receipe } = this.state;
    return (
      <Container className='p-2'>
        <Row>
          <Col>
            {receipe && (
                <Row className='flex-column'>
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
          </Col>
            {receipe && (
                <Col className='flex-column shadow my-3'>
                  <h6>Przepis</h6>
                  <p>{receipe.description}</p>
                  <h6>Wymagane składniki</h6>
                  {receipe.productQuantityList.map((n) =>
                  <li>{n.productName} ({n.quantity} gram)</li>
                  )}
                </Col>
            )}
        </Row>
{/*          <br />
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
          </Form>*/}
{/*          <hr />
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
          </Col>*/}
      </Container>
    );
  }
}
