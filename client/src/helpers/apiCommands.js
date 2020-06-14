import { getSafe, post, postSafe } from './api';
import {
  getAddProductInfoApiUrl,
  getAllProductsApiUrl,
  getGoalsApiUrl,
  getUserDailyCaloriesApiUrl,
  getUserDataApiUrl,
  loginApiUrl,
  loginApiUrlByFb,
  postGoalsApiUrl,
  postProductApiUrl,
  postProductToUserDailyCaloriesApiUrl,
  registerApiUrl,
  userRoleApiUrl
} from './routes';

export const postCreateUser = body => post(registerApiUrl(), body);
export const postLoginUser = body => post(loginApiUrl(), body);
export const postLoginUserByFb = body => post(loginApiUrlByFb(), body);

export const getAndCheckUserRole = () => getSafe(userRoleApiUrl());

export const getGoals = () => getSafe(getGoalsApiUrl());
export const postGoals = body => postSafe(postGoalsApiUrl(), body);
export const getUserDailyCalories = () => getSafe(getUserDailyCaloriesApiUrl());
export const getUserData = () => getSafe(getUserDataApiUrl());
export const addProductToUserDailyCalories = body => postSafe(postProductToUserDailyCaloriesApiUrl(), body);

export const getAllProducts = () => getSafe(getAllProductsApiUrl());
export const addProduct = body => postSafe(postProductApiUrl(), body);
export const getAddProductInfo = () => getSafe(getAddProductInfoApiUrl());
