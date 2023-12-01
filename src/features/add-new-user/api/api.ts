import { instance } from 'shared/api';
import { NewUserType } from 'shared/types';

export const postNewUser = (newUser: NewUserType): Promise<NewUserType> => {
    const add = instance.post('user', newUser).then((res) => res.data);

    return add;
};
