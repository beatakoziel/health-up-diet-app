import { post } from "./api"
import { loginApiUrl, usersApiUrl } from "./routes"

export const postCreateUser = (body) => post(usersApiUrl(), body);
export const postLoginUser = (body) => post(loginApiUrl(), body);
