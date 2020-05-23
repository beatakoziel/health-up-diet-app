import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Col } from 'react-bootstrap';
import { postLoginUserByFb } from '../../helpers/apiCommands';
import { AuthorizationContext } from '../../context';
import { LOGIN_ACTION } from '../../context/types';
import { useHistory } from 'react-router-dom';

export const Facebook = () => {
  const { dispatch } = useContext(AuthorizationContext);

  const history = useHistory();

  const responseFacebook = async response => {
    try {
      const result = await postLoginUserByFb({ ...response });
      dispatch({ type: LOGIN_ACTION, user: { ...result.data } });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Col className='text-center p-2'>
      <FacebookLogin
        appId='266882361174815'
        autoLoad={false}
        fields='name,email,picture'
        callback={responseFacebook}
        cssClass='fb connect fb-container'
      />
    </Col>
  );
};
