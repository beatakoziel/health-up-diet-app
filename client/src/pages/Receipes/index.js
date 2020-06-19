import * as React from 'react';
import './Receipes.css';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

import { ReceipeDiv } from '../../components/Receipe';
import {getRecipes} from "../../helpers/apiCommands";

export class Receipes extends React.Component {
  state = {
    receipes: [],
  };

/*  componentDidMount = () => {
    this.setState({ receipes: receipes }); //GET FROM API
  };*/

  componentDidMount = async () => {
    try {
      const result = await getRecipes();
      this.setState({ receipes: result });
    } catch (e) {
      const error = { message: 'Brak przepisow' };
      this.setState({ error: error });
    }
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
