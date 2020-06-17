import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { getGoals, postGoals } from '../../helpers/apiCommands';

const initUserForm = {
  weight: '',
  height: '',
  age: '',
  goal: '',
  gender: '',
  workActivityLevel: '',
  freeTimeActivityLevel: '',
};

const initLists = {
  workoutActivityLevelList: [],
  goalsList: [],
  gendersList: [],
  freeTimeActivityLevelList: [],
};

export class UserForm extends React.Component {

  state = { ...initUserForm, ...initLists };

  componentDidMount = async () => {
    try {
      const result = await getGoals();
      this.setState({ ...result.data });
    } catch (e) {
      console.log(e);
    }
  };

  updateCredentials = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendUserForm = async event => {
    event.preventDefault();
    const { age, height, weight } = this.state;
    const data = {
      ...this.state,
      age: parseInt(age),
      height: parseInt(height),
      weight: parseInt(weight),
    };
    try {
      await postGoals(data);
      this.props.closeModal();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const {
      workoutActivityLevelList,
      goalsList,
      gendersList,
      freeTimeActivityLevelList,
      freeTimeActivityLevel,
      workActivityLevel,
      height,
      goal,
      gender,
      age,
      weight,
    } = this.state;

    return (
      <Col>
        <h1 className={'text-center'}>Proszę wypełnić formularz</h1>
        <Form className='ml-4' onSubmit={this.sendUserForm} validated>
          <Form.Group>
            <Form.Label>Waga</Form.Label>
            <Form.Control
              required
              type='text'
              value={weight}
              name='weight'
              onChange={this.updateCredentials}
            />
            <Form.Label>Wysokość</Form.Label>
            <Form.Control
              required
              type='text'
              value={height}
              name='height'
              onChange={this.updateCredentials}
            />
            <Form.Label>Wiek</Form.Label>
            <Form.Control
              required
              type='text'
              value={age}
              name='age'
              onChange={this.updateCredentials}
            />
            <Form.Label>Cel aktywności</Form.Label>
            <Form.Control
              required
              as='select'
              value={goal}
              name='goal'
              onChange={this.updateCredentials}
            >
              <option hidden />
              {goalsList &&
                goalsList.map(goal => <option key={goal}>{goal}</option>)}
            </Form.Control>
            <Form.Label>Płeć</Form.Label>
            <Form.Control
              required
              as='select'
              value={gender}
              name='gender'
              onChange={this.updateCredentials}
            >
              <option hidden />
              {gendersList &&
                gendersList.map(gender => <option key={gender}>{gender}</option>)}
            </Form.Control>
            <Form.Label>Poziom aktywności fizycznej w pracy</Form.Label>
            <Form.Control
              required
              as='select'
              value={workActivityLevel}
              name='workActivityLevel'
              onChange={this.updateCredentials}
            >
              <option hidden />
              {workoutActivityLevelList &&
                workoutActivityLevelList.map(nodes => (
                  <option key={nodes}>{nodes}</option>
                ))}
            </Form.Control>
            <Form.Label>Poziom aktywności fizycznej w wolnym czasie</Form.Label>
            <Form.Control
              required
              as='select'
              value={freeTimeActivityLevel}
              name='freeTimeActivityLevel'
              onChange={this.updateCredentials}
            >
              <option hidden />
              {freeTimeActivityLevelList &&
                freeTimeActivityLevelList.map(node => (
                  <option key={node}>{node}</option>
                ))}
            </Form.Control>
          </Form.Group>
          <Button type='submit'>Wyślij</Button>
        </Form>
      </Col>
    );
  }
}
