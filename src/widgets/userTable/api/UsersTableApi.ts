import { instance } from 'shared/api';
import { UserType } from 'shared/types';

export const getAllUsers = async (): Promise<UserType[]> => {
    const users: Promise<UserType[]> = await instance.get('user').then((res) => res.data);

    return users;
};

export const deleteUserById = async (id: string) => {
    const deletedUser = await instance.delete(`user/${id}`).then((res) => res.data);

    return deletedUser;
};
