import * as React from "react"
import "./Header.css"
import { Button, Col, FormControl, InputGroup, Jumbotron, Row } from "react-bootstrap"
import { IoIosSearch } from "react-icons/io"
import styled from "styled-components"

export class Header extends React.Component {
  render() {
    return (
      <Jumbotron className="bg">
        <Row sm={1} md={2} className=" align-items-center">
          <Col md={4}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <IoIosSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Przepis . . ." />
              <InputGroup.Append>
                <Button variant="primary">Wyszukaj</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col className="text-white">
            <H1 className="text-light m-4">
              Właściwe odżywianie będzie medycyną jutra
            </H1>
          </Col>
        </Row>
      </Jumbotron>
    )
  }
}

const H1 = styled.h1`
  font-size: 3em;
  font-weight: bold;
`
