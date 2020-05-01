import * as React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import styled from "styled-components"
import DieteticMan from "../../resources/img/dietetic2.png"
import DieteticWoman from "../../resources/img/dietetic1.jpg"

export class Footer extends React.Component {
  render() {
    return (
      <Container className="shadow">
        <H1>Sprawdź nasze diety</H1>
        <hr className="border-success" />
        <Row xs={1} md={2} className="my-3">
          <Col>
            <Image src={DieteticMan} thumbnail />
          </Col>
          <Col>
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </P>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col xs={{ order: 2 }} md={{ order: 1 }}>
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </P>
          </Col>
          <Col xs={{ order: 1 }}>
            <Image src={DieteticWoman} thumbnail />
          </Col>
        </Row>
      </Container>
    )
  }
}

const H1 = styled.h1`
  font-size: 3em;
  text-align: center;
`

const P = styled.p`
  color: #444444;
`
