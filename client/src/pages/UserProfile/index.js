import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { LabelData } from '../../components/userProfile/labelData';
import {UserForm} from "../../components/userForm";

export const UserProfile = () => {
  return (
    <Container className='p-4'>
        <UserForm/>
      <Row>
        <LabelData />
      </Row>
      <Row>ads</Row>
      <Row>ads</Row>
      <Row>ads</Row>
    </Container>
  );
};
