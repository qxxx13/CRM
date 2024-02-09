import { instance } from 'shared/api';
import { UserType } from 'shared/types';

export const getAllUsers = (): Promise<UserType[]> => {
    const users: Promise<UserType[]> = instance.get('user').then((res) => res.data);

    return users;
};

export const deleteUserById = (id: string) => {
    const deletedUser = instance.delete(`user/${id}`).then((res) => res.data);

    return deletedUser;
};
