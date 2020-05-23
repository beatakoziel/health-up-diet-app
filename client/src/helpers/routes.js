const serverUrl = 'http://localhost:8081';

export const usersApiUrl = (id) => id ? `${serverUrl}/users/${id}` : `${serverUrl}/users`;
export const registerApiUrl = () => `${serverUrl}/signup`;
export const loginApiUrl = () => `${serverUrl}/login`;
export const loginApiUrlByFb = () => `${serverUrl}/login/fb`;

