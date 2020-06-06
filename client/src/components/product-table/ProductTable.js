import React from 'react';
import PropTypes from 'prop-types';
import { ProductTableRow } from '../product-table-row/ProductTableRow';

export const ProductTable = () => {


  return (
    <div className='row d-flex flex-column'>
      <ProductTableRow name='jabłko' unit='g' />
    </div>
  );
};

ProductTable.propTypes = {};
