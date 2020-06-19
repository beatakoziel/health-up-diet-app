import React, { useContext, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { MdAccountCircle, MdLock } from 'react-icons/md';
import { CredentialsWrapper } from '../SignUp';
import { postLoginUser } from '../../helpers/apiCommands';
import { AuthorizationContext } from '../../context';
import { useHistory } from 'react-router-dom';
import { Facebook } from '../../containers/Facebook';
import { LOGIN_ACTION } from '../../types/action.types';

const initialState = {
  email: '',
  password: '',
  error: null,
};

export const SignIn = () => {
  const [credentials, setCredentials] = useState(initialState);

  const updateCredentials = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const { dispatch } = useContext(AuthorizationContext);
  const history = useHistory();

  const startLogin = async () => {
    try {
      const result = await postLoginUser({ ...credentials });
      dispatch({ type: LOGIN_ACTION, user: { ...result.data } });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CredentialsWrapper>
      <Row className=' d-flex shadow flex-column'>
        <Col className='text-center mt-3'>
          <img
            alt=''
            src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
            width='30'
            height='30'
          />{' '}
          HealthUP
        </Col>
        <Col>
          <InputGroup className='my-3'>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <MdAccountCircle />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={credentials.email}
              name='email'
              onChange={updateCredentials}
              placeholder='Nazwa użytkownika'
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <MdLock />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={credentials.password}
              name='password'
              onChange={updateCredentials}
              placeholder='Hasło'
              type='password'
            />
          </InputGroup>
        </Col>
        <Col>
          <Button
            onClick={startLogin}
            className='float-right mb-3'
            variant='outline-success'
          >
            Zaloguj
          </Button>
        </Col>
        <Facebook />
      </Row>
    </CredentialsWrapper>
  );
};
