import React from "react"
import { Accordion, Button, Card, Container, Image } from "react-bootstrap"
import { diets } from "../../data/diet"
import styled from "styled-components"

const SingleDiet = ({ eventKeyValue, dietTitle, dietDescription, image }) => (
  <Card border="success" className=''>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={eventKeyValue} className='d-flex align-items-center justify-content-center'>
        <Image rounded variant="left" src={image} style={{ width: "150px" }} />
        <TitleWrapper>{dietTitle}</TitleWrapper>
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

const TitleWrapper = styled.div`
padding: 5px;
text-decoration: none;
color: green;
border: solid 2px #00b74a;
margin: 5px;
`

const Wrapper = styled.div`
  min-height: 100vh;
  background: rgba(103, 198, 255, 0.08);
  padding: 2em;
`
