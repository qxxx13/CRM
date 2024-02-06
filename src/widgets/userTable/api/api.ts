import { instance } from 'shared/api';
import { UserType } from 'shared/types';

export const getAllUsers = (): Promise<UserType[]> => {
    const users: Promise<UserType[]> = instance.get('user').then((res) => res.data);

    return users;
};
