import {Button} from 'react-bootstrap';
import React from 'react';

export const ProductDiv = ({
                               id,
                               name,
                               category,
                                deleteProd,
                                editProd,
                           }) => {
    return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td className="align-items-center"><Button onClick={() => deleteProd(id)} variant="danger">Usuń</Button><Button onClick={() => editProd(id)} variant="warning">Edytuj</Button></td>
            </tr>
    );
};
