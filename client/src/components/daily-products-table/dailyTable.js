import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getUserDailyProducts } from '../../helpers/apiCommands';
import { MdDrafts } from 'react-icons/md';
import { DailyProductsRow } from '../daily-products-row/dailyProductsRow';

export const DailyProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getUserDailyProducts()
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
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
          {products.length > 0 ? (
            products.map((product, id) => (
              <DailyProductsRow
                key={id}
                productId={product.id}
                name={product.name}
                unit={product.nutrientsPerPortion.unit}
                category={product.category}
                calories={product.nutrientsPerPortion.calories}
                carbohydrates={product.nutrientsPerPortion.carbohydrates}
                fat={product.nutrientsPerPortion.fat}
                portionSize={product.nutrientsPerPortion.portionSize}
                proteins={product.nutrientsPerPortion.proteins}
              />
            ))
          ) : (
            <div className='col'>
              <h4>
                Brak wyników
                <MdDrafts />
              </h4>
            </div>
          )}
        </tbody>
      </Table>
    </div>
  );
};

DailyProductsTable.propTypes = {};
