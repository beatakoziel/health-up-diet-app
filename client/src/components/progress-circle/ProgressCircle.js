import React from 'react';
import PropTypes from 'prop-types';
import { Progress, Tag } from 'antd';

export const ProgressCircle = props => {
  const { name, actual, dailyNutrients, color } = props;

  const calculatePercent = () => {
    return Math.round((actual * 100) / dailyNutrients);
  };

  return (
    <div className='row d-flex justify-content-md-center p-3'>
      <div className='col d-flex align-items-center justify-content-md-end'>
        <Progress
          strokeColor={color}
          type='circle'
          percent={calculatePercent()}
          width={70}
        />
      </div>
      <div className='col d-flex align-items-center justify-content-md-start '>
        <Tag color={color}>{name}</Tag>
        <Tag color={color}>
          {actual} / {dailyNutrients}
        </Tag>
      </div>
    </div>
  );
};

ProgressCircle.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  dailyNutrients: PropTypes.number.isRequired,
  actual: PropTypes.number.isRequired,
};
