import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { ProductTableRow } from '../product-table-row/ProductTableRow';
import {getAllProducts} from "../../helpers/apiCommands";

export const ProductTable = () => {

    const [products, setProducts] = useState([{
        category: '',
        id: 0,
        name: '',
        nutrientsPerPortion: {
            calories: 0,
            carbohydrates: 0,
            fat: 0,
            portionSize: 0,
            proteins: 0,
            unit: ''
        }
    }]);

    useEffect(() => {
        getAllProducts()
            .then((res) => {
                setProducts({
                    products: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    });

  return (
    <div className='row d-flex flex-column'>
      <ProductTableRow name='jabłko' unit='g' />
    </div>
  );
};

ProductTable.propTypes = {};
