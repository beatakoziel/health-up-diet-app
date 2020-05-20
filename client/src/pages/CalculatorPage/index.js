import React from 'react';
import { BMI } from '../../components/calculations/Bmi';
import { WHR } from '../../components/calculations/Whr';
import { BMR } from '../../components/calculations/Bmr';

export const CalculatorPage = () => {
  return (
    <div>
      <BMI />
      <WHR />
      <BMR />
    </div>
  );
};
