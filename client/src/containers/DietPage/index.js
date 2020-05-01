import React from "react"
import { Accordion, Button, Card, Container, Image } from "react-bootstrap"
import { diets } from "../../data/diet"
import styled from "styled-components"

const SingleDiet = ({ eventKeyValue, dietTitle, dietDescription, image }) => (
  <Card border="success">
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={eventKeyValue}>
        <Image rounded variant="left" src={image} style={{ width: "150px" }} />
        <Button className="m-4" variant="outline-success" style={{ width: "150px" }}>
          {dietTitle}
        </Button>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={eventKeyValue}>
      <Card.Body>{dietDescription}</Card.Body>
    </Accordion.Collapse>
  </Card>
)

export const DietPage = () => {
  return (
    <Wrapper>
      <Container className="p-3 shadow">
        <Accordion defaultActiveKey="0">
          {diets.map((diet, id) => (
            <SingleDiet
              key={id}
              image={diet.photoPath}
              eventKeyValue={id}
              dietTitle={diet.title}
              dietDescription={diet.description}
            />
          ))}
        </Accordion>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: rgba(103, 198, 255, 0.08);
  padding: 2em;
`
