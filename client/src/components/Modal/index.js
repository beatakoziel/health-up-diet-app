import React, {Children} from 'react';
import { Button, Modal } from 'react-bootstrap';


export const GenericModal = (props) => {
    return (
        <Modal
            size='lg'
            centered show={true}
        >
            <Modal.Body>
                {props.children}
                <Button variant='danger' onClick={props.action}>
                    Zamknij
                </Button>
            </Modal.Body>
        </Modal>
    );
}
