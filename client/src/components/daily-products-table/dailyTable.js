import React from 'react';
import { Table } from 'react-bootstrap';
import { DailyProductsRow } from '../daily-products-row/dailyProductsRow';

export const DailyProductsTable = ({ products }) => {
  return (
    <div className='col p-3'>
      <h1>Tabela spożytych produktów</h1>
      <Table striped bordered hover className='border container'>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Ilość</th>
            <th>Kalorie</th>
            <th>Węglowodany</th>
            <th>Tłuszcze</th>
            <th>Białka</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product, key) => (
              <DailyProductsRow
                key={key}
                productId={product.id}
                name={product.name}
                unit={product.unit}
                category={product.category}
                calories={product.calories}
                carbohydrates={product.carbohydrates}
                fat={product.fat}
                portionSize={product.portionSize}
                proteins={product.proteins}
              />
            ))}
        </tbody>
      </Table>
    </div>
  );
};

DailyProductsTable.propTypes = {};
