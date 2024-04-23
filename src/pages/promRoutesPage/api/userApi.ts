import { instance } from 'shared/api';

export const getAllPromUsers = () => {
    const proms = instance.get('user?role=promouter').then((res) => res.data);

    return proms;
};
