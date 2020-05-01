import React from "react"
import { Button, Form, Nav, Navbar } from "react-bootstrap"

export const Navigation = () => {
  return (
    <Navbar
      className="h-25 border-bottom border-success"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="/">
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
          width="30"
          height="30"
        />{" "}
        HealthUP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-nav-bar" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" defaultActiveKey="/">
          <Nav.Link href="/przepisy" eventKey="link-1" active>
            Przepisy
          </Nav.Link>
          <Nav.Link href="/produkty" eventKey="link-1" active>
            Produkty
          </Nav.Link>
          <Nav.Link href="/diety" eventKey="link-2" active>
            Diety
          </Nav.Link>
          <Nav.Link href="/kalkulator" eventKey="link-2" active>
            Kalkulator
          </Nav.Link>
        </Nav>
        <Form inline>
          <Button className="mr-2" variant="outline-success">
            Zaloguj
          </Button>
          <Button variant="outline-info">Zarejestruj</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
