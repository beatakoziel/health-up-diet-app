import React, { useEffect, useState } from 'react';
import { ProductTable } from '../../components/product-table/ProductTable';
import { TableMode } from '../../types/enums/Colors';
import { MealAdd } from '../../components/meal-add/MealAdd';
import { MealList } from '../../components/meal-list/MealList';
import { Divider } from 'antd';

export const MealPage = () => {
  const [products, setProducts] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // GET FROM API MEALS
  }, []);

  const deleteMeal = mealId => {
    //DELETE MEAL FROM API
    setMeals(meals.filter(meal => meal.mealId !== mealId));
  };

  const addMeal = meal => {
    setMeals([meal, ...meals]);
  };

  const addProduct = product => {
    setProducts([product, ...products]);
  };

  const deleteProducts = productId => {
    setProducts(products.filter(product => product.productId !== productId));
  };

  return (
    <div className='container shadow my-3'>
      <div className='row'>
        <MealList meals={meals} deleteMeal={deleteMeal} />
      </div>
      <Divider dashed={true} />
      <div className='row'>
        <MealAdd
          products={products}
          addMeal={addMeal}
          deleteProducts={deleteProducts}
        />
        <div className='col'>
          <ProductTable mode={TableMode.Meal} callback={addProduct} />
        </div>
      </div>
    </div>
  );
};
//
// const meal = {
//   products: [
//     {
//       idProduct: 1,
//       quantity: 200,
//     },
//     {
//       idProduct: 2,
//       quantity: 500,
//     },
//   ],
//   name: 'Schabowy z ziemniakami',
// };
