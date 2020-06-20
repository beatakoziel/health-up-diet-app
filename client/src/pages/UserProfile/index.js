import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { UserForm } from '../../components/userForm';
import { DailyDemand } from '../../components/daily-demand';
import { DailyProductsTable } from '../../components/daily-products-table/dailyTable';
import { getUserDailyProducts } from '../../helpers/apiCommands';
import { ProductTable } from '../../components/product-table/ProductTable';
import { TableMode } from '../../types/enums/Colors';
import { Divider } from 'antd';

export const UserProfile = () => {
  const [products, setProducts] = useState([]);

  const addProduct = product => {
    setProducts([product, ...products]);
  };

  useEffect(() => {
    getUserDailyProducts()
      .then(res => {
        setProducts(res.data.map(ob => ({ ...ob, ...ob.nutrientsPerPortion })));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='container shadow p-2 my-2'>
      <div className='col'>
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
      </div>
      <Divider dashed />
      <DailyDemand products={products} />
      <Divider dashed />
      <div className='row d-flex flex-column'>
        <div className='col'>
          <h1>Jak wygląda Twoja dzisiejsza dieta?</h1>
          <ProductTable mode={TableMode.DailyDemand} callback={addProduct} />
        </div>
        <Divider dashed />
        <DailyProductsTable products={products} />
      </div>
    </div>
  );
};
