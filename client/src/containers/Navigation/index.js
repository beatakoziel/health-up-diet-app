import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = props => {
  const history = useHistory();

  return (
    <Navbar
      className='h-25 border-bottom border-success'
      collapseOnSelect
      expand='lg'
      bg='light'
      variant='light'
    >
      <Navbar.Brand>
        <Link to='/'>
          <img
            alt=''
            src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
            width='30'
            height='30'
          />{' '}
          HealthUP
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-nav-bar' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto' defaultActiveKey='/'>
          <HLink to='/przepisy'>Przepisy</HLink>
          <HLink to='/produkty'>Produkty</HLink>
          <HLink to='/diety'>Diety</HLink>
          <HLink to='/Kalkulator'>Kalkulator</HLink>
        </Nav>
        <Form inline>
          <Button
            onClick={() => history.push('/logowanie')}
            className='mr-2'
            variant='outline-success'
          >
            Zaloguj
          </Button>
          <Button
            onClick={() => history.push('/rejestracja')}
            variant='outline-info'
          >
            Zarejestruj
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

const HLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  color: #171616;
  &:hover {
    text-decoration: none;
    color: #666666;
  }
`;
