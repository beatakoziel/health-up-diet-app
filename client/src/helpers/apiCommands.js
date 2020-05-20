import { post } from './api';
import { loginApiUrl, loginApiUrlByFb, registerApiUrl } from './routes';

export const postCreateUser = body => post(registerApiUrl(), body);
export const postLoginUser = body => post(loginApiUrl(), body);
export const postLoginUserByFb = body => post(loginApiUrlByFb(), body);
