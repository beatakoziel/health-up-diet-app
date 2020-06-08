import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

export const ProductTableSearchBar = ({ setFilter }) => {
  const [buffer, setBuffer] = useState('');

  useEffect(() => {
    setFilter(buffer);
  }, [buffer]);

  const onChange = e => {
    setBuffer(e.target.value);
  };

  const handleDeleteClick = () => {
    setBuffer('');
  };

  return (
    <InputGroup className='mb-3'>
      <FormControl value={buffer} placeholder='...' onChange={onChange} />
      <InputGroup.Append>
        <InputGroup.Text>
          <MdSearch />
        </InputGroup.Text>
      </InputGroup.Append>
      {buffer.length > 0 && (
        <InputGroup.Append>
          <Button variant='danger' onClick={handleDeleteClick}>
            -
          </Button>
        </InputGroup.Append>
      )}
    </InputGroup>
  );
};

ProductTableSearchBar.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
