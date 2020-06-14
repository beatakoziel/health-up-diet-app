import React, { useEffect, useState } from 'react';
import { Accordion, Alert, Button, Card, Container } from 'react-bootstrap';
import { ProgressCircle } from '../../components/progress-circle/ProgressCircle';
import { Color } from '../../types/enums/Colors';
import { ProductTable } from '../../components/product-table/ProductTable';
import { getUserDailyCalories, getUserData } from '../../helpers/apiCommands';
import { ProductAdd } from '../product-add/ProductAdd';

const initUserData = {
  age: 0,
  calories: 0,
  carbohydrates: 0,
  dataCompleted: true,
  fat: 0,
  freeTimeActivityLevel: '',
  gender: '',
  goal: '',
  height: 0,
  proteins: 0,
  weight: 0,
  workActivityLevel: '',
};

const initDailyNutrients = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  proteins: 0,
};

export const DailyDemand = () => {
  const [dailyNutrients, setdailyNutrients] = useState(initDailyNutrients);
  // eslint-disable-next-line no-unused-vars
  const [waterGlasses, setwaterGlasses] = useState(0);

  const [noData, setNoData] = useState(false);

  const [userData, setUserData] = useState(initUserData);

  useEffect(() => {
    getUserDailyCalories()
      .then(res => {
        setdailyNutrients({ ...res.data.dailyNutrients });
        setwaterGlasses(res.data.waterGlasses);
      })
      .catch(err => {
        console.log(err);
        setNoData(true);
      });

    getUserData()
      .then(res => {
        setUserData({ ...res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }, [userData.age]);

  return (
    <Container>
      {noData && (
        <Alert variant='danger'>
          <h3>Najpierw wypełnij formularz</h3>
        </Alert>
      )}
      <div>
        <br />
        <h1>Twoje dzienne zapotrzebowanie</h1>
        <br />
        <ProgressCircle
          name='Kalorie'
          actual={dailyNutrients.calories}
          dailyNutrients={userData.calories}
          color={Color.blue}
        />
      </div>
      <br />
      <div>
        <ProgressCircle
          name='Węglowodany'
          actual={dailyNutrients.carbohydrates}
          dailyNutrients={userData.carbohydrates}
          color={Color.red}
        />
      </div>
      <br />
      <div>
        <ProgressCircle
          name='Tłuszcze'
          actual={dailyNutrients.fat}
          dailyNutrients={userData.fat}
          color={Color.gold}
        />
      </div>
      <br />
      <div>
        <ProgressCircle
          name='Białka'
          actual={dailyNutrients.proteins}
          dailyNutrients={userData.proteins}
          color={Color.orange}
        />
      </div>
      <div>
        <br />
        <br />
        <br />
        <h1>Jak wygląda Twoja dzisiejsza dieta?</h1>
        <ProductTable />
      </div>
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                Dodaj produkt do bazy
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                <ProductAdd />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </Container>
  );
};
