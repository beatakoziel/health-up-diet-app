import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import {getGoals, postGoals} from "../../helpers/apiCommands";

export class UserForm extends React.Component {
    state = {
        workoutActivityLevelList: [],
        goalsList: [],
        gendersList: [],
        freeTimeActivityLevelList: [],
        weight: 0,
        height: 0,
        age: 0,
        calories: 0,
        carbohydrates: 0,
        proteins: 0,
        fat: 0,
        goal: '',
        gender: '',
        workActivityLevel: '',
        freeTimeActivityLevel: '',
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
        const { weight, age, calories, carbohydrates, fat, gender, goal, height, proteins, workActivityLevel, freeTimeActivityLevel } = this.state;
        const bodyposts = {
            age: age,
            freeTimeActivityLevel: freeTimeActivityLevel,
            gender: gender,
            goal: goal,
            height: height,
            weight: weight,
            workActivityLevel: workActivityLevel
        };
        if (
            weight.length > 0 &&
            age.length > 0 &&
            calories.length > 0 &&
            carbohydrates.length > 0 &&
            fat.length > 0 &&
            gender.length > 0 &&
            goal.length > 0 &&
            height.length > 0 &&
            proteins.length > 0 &&
            workActivityLevel.length > 0 &&
            freeTimeActivityLevel.length > 0
        )
        {
            try{
                console.log({age,freeTimeActivityLevel,gender,goal,height,weight,workActivityLevel});
                await postGoals({age,freeTimeActivityLevel,gender,goal,height,weight,workActivityLevel});
            }catch (e) {
                console.log(e);
            }
        }
    };

    render() {
        const { workoutActivityLevelList, goalsList, gendersList, freeTimeActivityLevelList, freeTimeActivityLevel, workActivityLevel, proteins, height, goal, gender, fat, carbohydrates, calories, age, weight } = this.state;

        return (
            <Col className={"border border-success"}>

                <h1 className={"text-center"}>Proszę wypełnić formularz</h1>

                    <Form className='ml-4'>
                        <Form.Group controlId='exampleForm.ControlTextarea1'>
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
                            <Form.Label>Spożywane średnio kalorie w ciągu dnia</Form.Label>
                            <Form.Control
                                type='text'
                                value={calories}
                                name='calories'
                                onChange={this.updateCredentials}
                                placeholder=''
                            />
                            <Form.Label>Spożywane średnio węglowodany (w gramach)</Form.Label>
                            <Form.Control
                                type='text'
                                value={carbohydrates}
                                name='carbohydrates'
                                onChange={this.updateCredentials}
                                placeholder=''
                            />
                            <Form.Label>Spożywane średnio białka (w gramach)</Form.Label>
                            <Form.Control
                                type='text'
                                value={proteins}
                                name='proteins'
                                onChange={this.updateCredentials}
                                placeholder=''
                            />
                            <Form.Label>Spożywane średnio tłuszcze (w gramach)</Form.Label>
                            <Form.Control
                                type='text'
                                value={fat}
                                name='fat'
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
