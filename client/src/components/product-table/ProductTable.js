import React, {useState, useEffect} from 'react';
import { ProductTableRow } from '../product-table-row/ProductTableRow';
import {getAllProducts} from "../../helpers/apiCommands";
import {Container, Col} from "react-bootstrap";

export const ProductTable = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts()
            .then((res) => {
                setProducts(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    },[]);


  return (
      <Container className='shadow p-2'>
          <Col>
              {products.length>0 &&
              products.map((product,id) => (
                  <ProductTableRow
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
              ))}
          </Col>
      </Container>
  );
};

ProductTable.propTypes = {};
