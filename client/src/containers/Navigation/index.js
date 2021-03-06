import React, { useContext } from 'react';
import { Button, Form, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AuthorizationContext } from '../../context';
import UserLogo from '../../resources/img/user.png';
import { LOGOUT_ACTION } from '../../types/action.types';

const UserImage = <Image src={UserLogo} width='40px' height='40px' />;

export const Navigation = () => {
  const history = useHistory();

  const { authData, dispatch } = useContext(AuthorizationContext);

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
          {authData.userRole === 'USER_PREMIUM' && (
            <React.Fragment>
              <HLink to='/przepisy'>Przepisy</HLink>
              <HLink to='/diety'>Diety</HLink>
            </React.Fragment>
          )}
          <HLink to='/Kalkulator'>Kalkulator</HLink>
          {/*<HLink to='/demo'>Demo</HLink>*/}
          <HLink to='/platnosc'>Konto premium</HLink>
        </Nav>
        {!authData.isAuthenticated ? (
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
        ) : (
          <Nav>
            <NavDropdown
              className='btn dropdown'
              as={Button}
              title={UserImage}
              id='dropdown-item-button'
            >
              <Vlink to='/profil'>Mój profil</Vlink>
              <Vlink to='/posilki'>Moje posiłki</Vlink>

              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  dispatch({ type: LOGOUT_ACTION });
                }}
              >
                Wyloguj się
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        )}
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

const Vlink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 4px 24px;
  color: #212429;
  &:hover {
    text-decoration: none;
    color: #666666;
  }
`;
