import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Row } from 'react-bootstrap';
import { MyInput } from '../../components/inputs';
import styled from 'styled-components';
import { MdLock, MdMail } from 'react-icons/md';
import { postCreateUser } from '../../helpers/apiCommands';
import { useHistory } from 'react-router-dom';

export const SignUp = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    rePassword: '',
  });
  const [error, setError] = useState(null);

  const history = useHistory();

  const updateCredentials = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = async () => {
    if (!error) {
      try {
        await postCreateUser({ ...data });
        history.push('/logowanie');
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (!data.email) {
      setError({ message: 'Email jest wymagany' });
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(data.email)
    ) {
      setError({ message: 'Niepoprawny email' });
    } else if (!data.password) {
      setError({ message: 'Hasło jest wymagane' });
    } else if (!data.rePassword) {
      setError({ message: 'Powtórz hasło' });
    } else if (data.password !== data.rePassword) {
      setError({ message: 'Hasła nie są identyncze' });
    } else {
      setError(null);
    }
  }, [data]);

  return (
    <CredentialsWrapper>
      <Row className=' d-flex shadow flex-column p-2'>
        <Col>{error && <Alert variant='danger'>{error.message}</Alert>}</Col>
        <MyInput
          name='email'
          placeholder='Twój email'
          SpecialIcon={MdMail}
          value={data.email}
          updateCredentials={updateCredentials}
          type='email'
        />
        <MyInput
          name='password'
          placeholder='Hasło'
          SpecialIcon={MdLock}
          value={data.password}
          updateCredentials={updateCredentials}
          type='password'
        />
        <MyInput
          name='rePassword'
          placeholder='Powtórz hasło'
          SpecialIcon={MdLock}
          value={data.rePassword}
          updateCredentials={updateCredentials}
          type='password'
        />
        <Col>
          <Button
            variant='outline-success'
            onClick={sendData}
            className='float-right'
            disabled={error}
          >
            Zarejestruj
          </Button>
        </Col>
      </Row>
    </CredentialsWrapper>
  );
};

export const CredentialsWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
