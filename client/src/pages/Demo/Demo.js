import React, {useEffect, useState} from 'react';
import {Container, Row} from 'react-bootstrap';
import { ProgressCircle } from '../../components/progress-circle/ProgressCircle';
import { Color } from '../../helpers/enums/Colors';
import { ProductTable } from '../../components/product-table/ProductTable';
import {getUserDailyCalories, getUserData} from "../../helpers/apiCommands";
import {ProductAdd} from "../../components/product-add";

export const DemoPage = () => {

    const [dailyNutrients, setdailyNutrients] = useState({
        calories:0,
        carbohydrates:0,
        fat:0,
        proteins:0
    });
    const [waterGlasses, setwaterGlasses] = useState(0);

    const [userData, setUserData] = useState({
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
        workActivityLevel: ''
    });

    useEffect(() => {
        getUserDailyCalories()
            .then((res) => {
                setdailyNutrients({
                    calories: res.data.dailyNutrients.calories,
                    carbohydrates: res.data.dailyNutrients.carbohydrates,
                    fat: res.data.dailyNutrients.fat,
                    proteins: res.data.dailyNutrients.proteins,
                });
                setwaterGlasses(res.data.waterGlasses);
            })
            .catch((err) => {
                console.log(err);
            });

        getUserData()
            .then((res) => {
                setUserData({
                    age: res.data.age,
                    calories: res.data.calories,
                    carbohydrates: res.data.carbohydrates,
                    dataCompleted: res.data.dataCompleted,
                    fat: res.data.fat,
                    freeTimeActivityLevel: res.data.freeTimeActivityLevel,
                    gender: res.data.gender,
                    goal: res.data.goal,
                    height: res.data.height,
                    proteins: res.data.proteins,
                    weight: res.data.weight,
                    workActivityLevel: res.data.workActivityLevel
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userData.age]);

  return (
    <Container>
      <div><br/>
        <h1>Twoje dzienne zapotrzebowanie</h1><br/>
          <ProgressCircle
              name='Kalorie'
              actual={dailyNutrients.calories}
              dailyNutrients={userData.calories}
              color={Color.blue}
          />
      </div><br/>
        <div>
            <ProgressCircle
                name='Węglowodany'
                actual={dailyNutrients.carbohydrates}
                dailyNutrients={userData.carbohydrates}
                color={Color.red}
            />
        </div><br/>
        <div>
            <ProgressCircle
                name='Tłuszcze'
                actual={dailyNutrients.fat}
                dailyNutrients={userData.fat}
                color={Color.gold}
            />
        </div><br/>
        <div>
            <ProgressCircle
                name='Białka'
                actual={dailyNutrients.proteins}
                dailyNutrients={userData.proteins}
                color={Color.orange}
            />
        </div>
      <div>
        <h1>Produkty</h1>
        <ProductTable />
      </div>
        <div>
            <ProductAdd/>
        </div>
    </Container>
  );
};
