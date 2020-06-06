import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import {getGoals, postGoals} from "../../helpers/apiCommands";

export class UserForm extends React.Component {
    state = {
        workoutActivityLevelList: [],
        goalsList: [],
        gendersList: [],
        freeTimeActivityLevelList: [],
        weight: '',
        height: '',
        age: '',
        goal: 'Redukowanie',
        gender: 'Mężczyzna',
        workActivityLevel: 'Bardzo niski',
        freeTimeActivityLevel: 'Bardzo niski',
        dataCompleted: true
    };

    componentDidMount = async () => {
        try {
            const result = await getGoals();
            this.setState({
                workoutActivityLevelList: result.data.workoutActivityLevelList,
                goalsList: result.data.goalsList,
                gendersList: result.data.gendersList,
                freeTimeActivityLevelList: result.data.freeTimeActivityLevelList
            });
            console.log(result);
        } catch (e) {
            const error = { message: 'Błąd przy pobieraniu celów' };
            this.setState({ error: error });
        }
    };

    updateCredentials = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    sendUserForm = async () => {
        const { weight, age, calories, carbohydrates, fat, gender, goal, height, proteins, workActivityLevel, freeTimeActivityLevel, dataCompleted } = this.state;
        const bodyposts = {
            age: parseInt(age),
            freeTimeActivityLevel: freeTimeActivityLevel,
            gender: gender,
            goal: goal,
            height: parseInt(height),
            weight: parseInt(weight),
            workActivityLevel: workActivityLevel
        };
        if (
            weight.length > 0 &&
            age.length > 0 &&
            gender.length > 0 &&
            goal.length > 0 &&
            height.length > 0 &&
            workActivityLevel.length > 0 &&
            freeTimeActivityLevel.length > 0
        ) {
            try {
                console.log(bodyposts);
                await postGoals(bodyposts);
            } catch (e) {
                console.log(e);
            }
        }
        else {
            alert("brakuje danych");
        }
    };

    render() {
        const { workoutActivityLevelList, goalsList, gendersList, freeTimeActivityLevelList, freeTimeActivityLevel, workActivityLevel, height, goal, gender, age, weight } = this.state;

        return (
            <Col className={"border border-success"}>

                <h1 className={"text-center"}>Proszę wypełnić formularz</h1>

                    <Form className='ml-4'>
                        <Form.Group>
                            <Form.Label>Waga</Form.Label>
                            <Form.Control
                                type='text'
                                value={weight}
                                name='weight'
                                onChange={this.updateCredentials}
                                placeholder=''
                            />
                            <Form.Label>Wysokość</Form.Label>
                            <Form.Control
                                type='text'
                                value={height}
                                name='height'
                                onChange={this.updateCredentials}
                                placeholder=''
                            />
                            <Form.Label>Wiek</Form.Label>
                            <Form.Control
                                type='text'
                                value={age}
                                name='age'
                                onChange={this.updateCredentials}
                                placeholder=''
                            />
                            <Form.Label>Cel aktywności</Form.Label>
                            <Form.Control
                                as='select'
                                value={goal}
                                name='goal'
                                onChange={this.updateCredentials}
                            >
                                {goalsList &&
                                goalsList.map((goal) => (
                                    <option key={goal}>{goal}</option>
                                ))}
                            </Form.Control>
                            <Form.Label>Płeć</Form.Label>
                            <Form.Control
                                as='select'
                                value={gender}
                                name='gender'
                                onChange={this.updateCredentials}
                            >
                                {gendersList &&
                                gendersList.map((gender) => (
                                    <option key={gender}>{gender}</option>
                                ))}
                            </Form.Control>
                            <Form.Label>Poziom aktywności fizycznej w pracy</Form.Label>
                            <Form.Control
                                as='select'
                                value={workActivityLevel}
                                name='workActivityLevel'
                                onChange={this.updateCredentials}
                            >
                                {workoutActivityLevelList &&
                                workoutActivityLevelList.map((nodes) => (
                                    <option key={nodes}>{nodes}</option>
                                ))}
                            </Form.Control>
                            <Form.Label>Poziom aktywności fizycznej w wolnym czasie</Form.Label>
                            <Form.Control
                                as='select'
                                value={freeTimeActivityLevel}
                                name='freeTimeActivityLevel'
                                onChange={this.updateCredentials}
                            >
                                {freeTimeActivityLevelList &&
                                freeTimeActivityLevelList.map((node) => (
                                    <option key={node}>{node}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button onClick={this.sendUserForm} type='submit'>
                            Wyślij
                        </Button>
                    </Form>
            </Col>
        );
    }
}
