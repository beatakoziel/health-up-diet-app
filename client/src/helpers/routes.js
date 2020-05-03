const serverUrl = 'http://192.168.8.100:8081';

export const usersApiUrl = (id) => id ? `${serverUrl}/users/${id}` : `${serverUrl}/users`;
export const loginApiUrl = () => `${serverUrl}/login`;

