import { Col, FormControl, InputGroup } from "react-bootstrap"
import React from "react"

export const MyInput = ({
  value,
  name,
  placeholder,
  SpecialIcon,
  updateCredentials,
  type = "text",
}) => (
  <Col>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <SpecialIcon />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        value={value}
        name={name}
        onChange={updateCredentials}
        placeholder={placeholder}
        type={type}
      />
    </InputGroup>
  </Col>
)
