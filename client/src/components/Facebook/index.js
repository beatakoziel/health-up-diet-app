import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Col } from 'react-bootstrap';

export const Facebook = () => {
  const [fbCredentials, setFbCredentials] = useState({
    userID: '',
    name: '',
    email: '',
    picture: '',
  });

  // const { dispatch } = useContext(AuthorizationContext)

  const componentClicked = () => {
    console.log('clicked');
  };

  useEffect(() => {
    console.log(fbCredentials);
  }, [fbCredentials]);

  const responseFacebook = response => {
    setFbCredentials({ ...response });
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
