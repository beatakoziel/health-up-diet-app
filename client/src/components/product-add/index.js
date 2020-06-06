import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { ProductTableRow } from '../product-table-row/ProductTableRow';
import {addProduct, addProductToUserDailyCalories, getAllProducts, getAddProductInfo} from "../../helpers/apiCommands";
import {Container, Col, Form, Button} from "react-bootstrap";

export const ProductAdd = () => {

    const [products, setProducts] = useState({
        category: 'Makarony',
        name: '',
        calories: 0,
        carbohydrates: 0,
        fat: 0,
        portionSize: 0,
        proteins: 0,
        unit: 'Gramy'
    });

    const [info, setInfo] = useState([]);

    useEffect(() => {
        getAddProductInfo()
            .then((res) => {
                setInfo(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    const postProduct = () => {
        const postBody = {
            category: products.category,
            name: products.name,
            nutrientsPerPortion: {
                calories: products.calories,
                carbohydrates: products.carbohydrates,
                fat: products.fat,
                portionSize: products.portionSize,
                proteins: products.proteins,
                unit: products.unit
            }
        };
        addProduct(postBody)
            .then((res) => {
                console.log("ok");

            })
            .catch((err) => {
                console.log(err);
            });
    };

    const updateCredentials = (e) => {
        setProducts({ ...products, [e.target.name]: e.target.value });
    };

    return (
        <Container className='shadow p-2'>
            <Col>
                <h1>Dodaj produkt</h1>
                <Form className='ml-4'>
                    <Form.Group>
                        <Form.Label>Kateogria</Form.Label>
                        <Form.Control
                            as='select'
                            value={products.category}
                            name='category'
                            onChange={updateCredentials}
                        >
                            {info.categoryList &&
                            info.categoryList.map((cate) => (
                                <option key={cate}>{cate}</option>
                            ))}
                        </Form.Control>
                        <Form.Label>Nazwa</Form.Label>
                        <Form.Control
                            type='text'
                            value={products.name}
                            name='name'
                            onChange={updateCredentials}
                            placeholder=''
                        />
                        <Form.Label>Kalorie</Form.Label>
                        <Form.Control
                            type='text'
                            value={products.calories}
                            name='calories'
                            onChange={updateCredentials}
                            placeholder=''
                        />
                        <Form.Label>Węglowodany</Form.Label>
                        <Form.Control
                            type='text'
                            value={products.carbohydrates}
                            name='carbohydrates'
                            onChange={updateCredentials}
                            placeholder=''
                        />
                        <Form.Label>Tłuszcz</Form.Label>
                        <Form.Control
                            type='text'
                            value={products.fat}
                            name='fat'
                            onChange={updateCredentials}
                            placeholder=''
                        />
                        <Form.Label>Wielkość porcji</Form.Label>
                        <Form.Control
                            type='text'
                            value={products.portionSize}
                            name='portionSize'
                            onChange={updateCredentials}
                            placeholder=''
                        />
                        <Form.Label>Białka</Form.Label>
                        <Form.Control
                            type='text'
                            value={products.proteins}
                            name='proteins'
                            onChange={updateCredentials}
                            placeholder=''
                        />
                        <Form.Label>Jednostka miary</Form.Label>
                        <Form.Control
                            as='select'
                            value={products.unit}
                            name='unit'
                            onChange={updateCredentials}
                        >
                            {info.portionUnitList &&
                            info.portionUnitList.map((uni) => (
                                <option key={uni}>{uni}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={postProduct} type='submit'>
                        Wyślij
                    </Button>
                </Form>
            </Col>
        </Container>
    );
};

