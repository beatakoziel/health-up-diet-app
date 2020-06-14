import { ButtonGroup, FormControl, InputGroup, ToggleButton } from 'react-bootstrap';
import React from 'react';

export const CalculateInput = ({title,name,placeholder,unit,setValues}) => (
  <InputGroup className="my-3">
    <InputGroup.Prepend>
      <InputGroup.Text style={{ width: "70px" }}>{title}</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      name={name}
      onChange={setValues}
      placeholder={placeholder}
    />
    <InputGroup.Append>
      <InputGroup.Text style={{ width: "40px" }}>{unit}</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
)

export const CalculateOutput = ({value, placeholder}) => (
  <InputGroup className="my-3">
    <InputGroup.Prepend>
      <InputGroup.Text style={{ width: "70px" }}>Wynik</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl disabled value={value} placeholder={placeholder} />
  </InputGroup>
)

export const SexCheckbox = ({onChangeMan,onChangeWoman}) => (
  <ButtonGroup toggle>
    <ToggleButton
      style={{ width: "100px" }}
      variant="outline-success"
      type="radio"
      name="radio"
      value="1"
      onChange={onChangeMan}
    >
      Mężczyzna
    </ToggleButton>
    <ToggleButton
      style={{ width: "100px" }}
      variant="outline-danger"
      type="radio"
      name="radio"
      value="2"
      onChange={onChangeWoman}
    >
      Kobieta
    </ToggleButton>
  </ButtonGroup>
)
