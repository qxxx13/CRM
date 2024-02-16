import { instance } from 'shared/api';
import { LoginedUserType, LoginUserType } from 'shared/types/UserType';

export const login = async (loginData: LoginUserType) => {
    const user: LoginedUserType = await instance.post('/auth/login', loginData).then((res) => res.data);

    localStorage.setItem('token', user.accessToken);
    localStorage.setItem('isAuth', String(true));
    localStorage.setItem('userRole', JSON.stringify(user.Role));
    localStorage.setItem('user', JSON.stringify(user));

    return user;
};
