import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../types/enums/Colors';
import { ProgressCircle } from '../progress-circle/ProgressCircle';
import { Badge } from 'react-bootstrap';

export const ProductInf = props => {
  const {
    name,
    carbohydrates,
    portionSize,
    calories,
    fat,
    proteins,
    category,
  } = props;

  return (
    <div className='container'>
      <span>Nazwa: </span>
      <Badge variant='primary'>{name}</Badge>
      <br />
      <span>Kategoria: </span>
      <Badge variant='success'>{category}</Badge>
      <div className='row my-5 justify-content-around'>
        <ProgressCircle
          name='Kalorie'
          actual={calories}
          dailyNutrients={portionSize}
          color={Color.blue}
        />
        <ProgressCircle
          name='Węglowodany'
          actual={carbohydrates}
          dailyNutrients={portionSize}
          color={Color.red}
        />
      </div>
      <div className='row my-5 justify-content-around'>
        <ProgressCircle
          name='Tłuszcz'
          actual={fat}
          dailyNutrients={portionSize}
          color={Color.green}
        />
        <ProgressCircle
          name='Białka'
          actual={proteins}
          dailyNutrients={portionSize}
          color={Color.gold}
        />
      </div>
    </div>
  );
};

ProductInf.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  portionSize: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
};
