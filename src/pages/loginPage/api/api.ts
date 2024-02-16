import { instance } from 'shared/api';

export const login = (username: string, password: string) => {
    const authData = instance.post('auth/login', { username, password }).then((res) => res.data);

    return authData;
};

export const refreshToken = (username: string, password: string) => {
    const authData = instance.post('auth/refresh', { username, password }).then((res) => res.data);

    return authData;
};
