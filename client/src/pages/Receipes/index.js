import * as React from 'react';
import './Receipes.css';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { ReceipeDiv } from '../../components/Receipe';
import { receipes } from '../../data/ReceipesTemp';

export class Receipes extends React.Component {
  state = {
    receipes: null,
  };

  componentDidMount = () => {
    this.setState({ receipes: receipes });
  };

  render() {
    const { receipes } = this.state;
    return (
      <Container fluid>
        <Jumbotron className='backgr'>
          <Row sm={1} md={2} className=' align-items-center'>
            <Col md={4}></Col>
            <Col className='display-3 h1nap justify-content-center'>
              Wynonane przez nas przepisy
            </Col>
          </Row>
        </Jumbotron>
        <Row sm={1} md={2} xl={4}>
          {receipes &&
            receipes.map(receipe => (
              <ReceipeDiv
                key={receipe.id}
                id={receipe.id}
                name={receipe.name}
                photo={receipe.photo}
                description={receipe.description}
                productQuantityList={receipe.productQuantityList}
              />
            ))}
        </Row>
      </Container>
    );
  }
}
