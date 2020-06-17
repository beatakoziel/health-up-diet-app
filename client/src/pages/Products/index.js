import * as React from 'react';
import { Button, Container, Form, Row, Table } from 'react-bootstrap';
import { ProductDiv } from '../../components/Product';
import { products } from '../../data/ProductsTemp';

export class Products extends React.Component {
  state = { products };

  componentDidMount = () => {
    // GET FROM API PRODUCTS
  };

  deleteProduct = id => {
    //POST API
    const temp = this.state.products.filter(product => product.id !== id);
    this.setState({ products: temp });
  };

  editProduct = id => {
    //EDIT PRODUCT
  };

  addProduct = () => {
    //ADD PRODUCT
  };

  render() {
    const { products } = this.state;
    return (
      <Container className='flex-column shadow my-3'>
        <Row>
          <h1>Wszystkie produkty</h1>
          <Table striped bordered hover className='mt-3'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nazwa</th>
                <th>Kategoria</th>
                <th>Operacje</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map(product => (
                  <ProductDiv
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    category={product.category}
                    deleteProd={this.deleteProduct}
                    editProd={this.editProduct}
                  />
                ))}
            </tbody>
          </Table>
        </Row>
        <hr />
        <h1>Dodaj nowy produkt</h1>
        <br />
        <Row>
          <Form className='ml-4'>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Nazwa produktu</Form.Label>
              <Form.Control type='text' placeholder='' />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlSelect1'>
              <Form.Label>Wybierz katogorię produktu</Form.Label>
              <Form.Control as='select'>
                <option>Słodycze</option>
                <option>Makarony</option>
                <option>Ryby</option>
                <option>Owoce</option>
                <option>Mięso</option>
              </Form.Control>
            </Form.Group>
            <Button type='submit'>Wyślij</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
