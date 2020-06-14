import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const GenericModal = props => {
  const { isShow, children, action, handleClose } = props;

  if (isShow) {
    return (
      <Modal size='lg' centered show={isShow} onHide={handleClose}>
        <Modal.Body>
          {children}
          <Button variant='danger' onClick={action}>
            Zamknij
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
  return null;
};

GenericModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
};
