import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Col } from 'react-bootstrap';
import { postLoginUserByFb } from '../../helpers/apiCommands';

export const Facebook = () => {
  const componentClicked = () => {
    console.log('clicked');
  };

  const responseFacebook = response => {
    postLoginUserByFb({ ...response })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <Col className='text-center p-2'>
      <FacebookLogin
        appId='266882361174815'
        autoLoad={false}
        fields='name,email,picture'
        onClick={componentClicked}
        callback={responseFacebook}
        cssClass='fb connect fb-container'
      />
    </Col>
  );
};
