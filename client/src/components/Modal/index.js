import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const GenericModal = props => {
  const { isShow, children, handleClose } = props;

  if (isShow) {
    return (
      <Modal size='lg' centered show={isShow} onHide={handleClose}>
        <Modal.Body>
          {children}
          {handleClose && (
            <Button variant='danger' onClick={handleClose}>
              Zamknij
            </Button>
          )}
        </Modal.Body>
      </Modal>
    );
  }
  return null;
};

GenericModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func,
  action: PropTypes.func,
};
