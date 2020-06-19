import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const DailyProductsRow = props => {

    const { productId, name, unit, proteins, calories, carbohydrates, fat, portionSize } = props;

    const deleteDailyProduct = () => {
        const postToApi = { productId };
        console.log(postToApi);
        // delete daily product API
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{portionSize} {unit}</td>
            <td>{calories}</td>
            <td>{carbohydrates}</td>
            <td>{fat}</td>
            <td>{proteins}</td>
            <td><Button onClick={deleteDailyProduct} variant="danger" className='float-left'>Usuń</Button></td>
        </tr>
    );
};

DailyProductsRow.propTypes = {
    productId: PropTypes.number.isRequired, //id
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    portionSize: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
};
