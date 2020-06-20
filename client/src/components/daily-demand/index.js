import React, { useEffect, useState } from 'react';
import { Alert, Col } from 'react-bootstrap';
import { ProgressCircle } from '../../components/progress-circle/ProgressCircle';
import { Color } from '../../types/enums/Colors';
import { getUserDailyCalories, getUserData } from '../../helpers/apiCommands';
import { GenericModal } from '../Modal';
import { useOpenModal } from '../../hooks/useOpenModal';
import { UserForm } from '../userForm';

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

export const DailyDemand = ({ products }) => {
  const [dailyNutrients, setdailyNutrients] = useState(initDailyNutrients);
  // eslint-disable-next-line no-unused-vars
  const [waterGlasses, setwaterGlasses] = useState(0);

  const [noData, setNoData] = useState(false);

  const [userData, setUserData] = useState(initUserData);

  const [isModalOpen, openModal, closeModal] = useOpenModal();

  const [error, setError] = useState(false);

  useEffect(() => {
    getUserData()
      .then(res => {
        if (res.data.dataCompleted) setUserData({ ...res.data });
        else {
          setError(true);
        }
      })
      .catch(err => {
        console.log(err);
      });

    getUserDailyCalories()
      .then(res => {
        setdailyNutrients({ ...res.data.dailyNutrients });
        setwaterGlasses(res.data.waterGlasses);
      })
      .catch(err => {
        console.log(err);
        setNoData(true);
      });
  }, [products]);

  useEffect(() => {
    if (error) {
      openModal();
      setError(false);
    }
  }, [error, openModal]);

  const transformProportion = (dailyNutrients, actual) => {
    return Math.abs(dailyNutrients - actual);
  };

  return (
    <div className='row d-flex flex-column'>
      {noData && (
        <Col>
          <Alert variant='danger'>
            <h3>Najpierw wypełnij formularz</h3>
          </Alert>
        </Col>
      )}
      <div className='col'>
        <h1>Twoje dzienne zapotrzebowanie</h1>

        <ProgressCircle
          name='Kalorie'
          actual={transformProportion(userData.calories, dailyNutrients.calories)}
          dailyNutrients={userData.calories}
          color={Color.blue}
        />
      </div>

      <div className='col'>
        <ProgressCircle
          name='Węglowodany'
          actual={transformProportion(
            userData.carbohydrates,
            dailyNutrients.carbohydrates
          )}
          dailyNutrients={userData.carbohydrates}
          color={Color.red}
        />
      </div>

      <div className='col'>
        <ProgressCircle
          name='Tłuszcze'
          actual={transformProportion(userData.fat, dailyNutrients.fat)}
          dailyNutrients={userData.fat}
          color={Color.gold}
        />
      </div>

      <div className='col'>
        <ProgressCircle
          name='Białka'
          actual={transformProportion(userData.proteins, dailyNutrients.proteins)}
          dailyNutrients={userData.proteins}
          color={Color.orange}
        />
      </div>
      <GenericModal isShow={isModalOpen}>
        <UserForm closeModal={closeModal} />
      </GenericModal>
    </div>
  );
};
