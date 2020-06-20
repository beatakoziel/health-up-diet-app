import React from 'react';
import { MealItem } from '../meal-item/MealItem';

export const MealList = ({ meals, deleteMeal }) => {
  return (
    <div className='col m-2 d-flex flex-wrap'>
      {meals &&
        meals.map(meal => (
          <MealItem
            key={meal.mealId}
            idMeal={meal.mealId}
            name={meal.name}
            products={meal.products}
            deleteMeal={deleteMeal}
          />
        ))}
    </div>
  );
};
