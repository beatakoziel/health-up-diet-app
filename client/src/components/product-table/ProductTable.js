import React, {useState, useEffect } from 'react';
import { ProductTableRow } from '../product-table-row/ProductTableRow';
import { ProductTableSearchBar } from '../product-table-search-bar/ProductTableSearchBar';
import {Button, Container} from 'react-bootstrap';
import { getAllProducts } from '../../helpers/apiCommands';
import { MdDrafts } from 'react-icons/md';
import {GenericModal} from "../Modal";
import {ProductAdd} from "../product-add/ProductAdd";
import {useOpenModal} from "../../pages/Demo/Demo";

export const ProductTable = () => {
  // TODO: Add hook with modal to add new product into db

  const [authData, openModal, closeModal] = useOpenModal();

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
  }, [filter]);

  // TODO: Open modal by click
  const handleClick = () => {
    // open modal to add product;
    openModal();
  };

  return (
    <div className='border container'>
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
        {authData.isModalOpen === true && (
            <GenericModal action={closeModal}>
                <ProductAdd/>
            </GenericModal>
        )}
    </div>
  );
};

ProductTable.propTypes = {};
