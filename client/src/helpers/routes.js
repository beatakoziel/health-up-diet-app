const serverUrl = 'http://localhost:8081';

export const usersApiUrl = id =>
  id ? `${serverUrl}/users/${id}` : `${serverUrl}/users`;

export const userRoleApiUrl = () => `${serverUrl}/users/role`;

export const registerApiUrl = () => `${serverUrl}/signup`;
export const loginApiUrl = () => `${serverUrl}/login`;
export const loginApiUrlByFb = () => `${serverUrl}/login/fb`;

export const getGoalsApiUrl = () => `${serverUrl}/info/goal`;
export const postGoalsApiUrl = () => `${serverUrl}/users/data`;
export const getUserDataApiUrl = () => `${serverUrl}/users/data`;
export const getUserDailyProductsApiUrl = () => `${serverUrl}/users/daily-products`;
export const getUserDailyCaloriesApiUrl = () => `${serverUrl}/users/daily-calories`;
export const postProductToUserDailyCaloriesApiUrl = () =>
  `${serverUrl}/users/calories`;

export const getAllProductsApiUrl = () => `${serverUrl}/products`;
export const postProductApiUrl = () => `${serverUrl}/products`;
export const getAddProductInfoApiUrl = () => `${serverUrl}/info`;

export const getReceipesApiUrl = () => `${serverUrl}/recipes`;
export const getRecipeByIdApiUrl = id =>
  id ? `${serverUrl}/recipes/${id}` : `${serverUrl}/recipes`;

export const mealApiUrl = id =>
  id ? `${serverUrl}/meals/${id}` : `${serverUrl}/meals`;

export const payUrl = () => `${serverUrl}/pay`;
export const payAcceptApiUrl = (paymentId, PayerID) =>
  `${serverUrl}/pay/${paymentId}/${PayerID}`;
