import React, { useEffect, useState } from 'react';
import { ProductTableRow } from '../product-table-row/ProductTableRow';
import { ProductTableSearchBar } from '../product-table-search-bar/ProductTableSearchBar';
import { Button } from 'react-bootstrap';
import { getAllProducts } from '../../helpers/apiCommands';
import { MdDrafts } from 'react-icons/md';
import { GenericModal } from '../Modal';
import { ProductAdd } from '../product-add/ProductAdd';
import { useOpenModal } from '../../hooks/useOpenModal';

export const ProductTable = ({ mode, callback }) => {
  // TODO: Add hook with modal to add new product into db
  const [isModalOpen, openModal, closeModal] = useOpenModal();

  const [products, setProducts] = useState([]);

  const [active, setActive] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getAllProducts()
      .then(res => {
        setProducts(res.data);
        setActive(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (filter.length <= 0) {
      setActive(products);
    } else {
      setActive(
        products.filter(el =>
          el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
      );
    }
  }, [filter, products]); // TODO check products

  // TODO: Open modal by click
  const handleClick = () => {
    // open modal to add product;
    openModal();
  };

  return (
    <div className='border container m-2 py-2'>
      <p>Wyszukaj: </p>
      <ProductTableSearchBar setFilter={setFilter} />
      <hr />
      <div className='row mb-3'>
        <p className='col'>Lista produktów: </p>
        <div className='col'>
          <Button
            className='float-right'
            variant='outline-success'
            onClick={handleClick}
          >
            Dodaj produkt
          </Button>
        </div>
      </div>

      <div className='row d-flex flex-column'>
        {active.length > 0 ? (
          active.map((product, id) => (
            <ProductTableRow
              callback={callback}
              mode={mode}
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
            <h4 className='text-center'>
              Brak wyników
              <MdDrafts />
            </h4>
          </div>
        )}
      </div>

      <GenericModal
        action={closeModal}
        isShow={isModalOpen}
        handleClose={closeModal}
      >
        <ProductAdd />
      </GenericModal>
    </div>
  );
};

ProductTable.propTypes = {};
