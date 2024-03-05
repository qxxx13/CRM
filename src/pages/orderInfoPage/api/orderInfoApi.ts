import { instance } from 'shared/api';
import { OrderType, UserType } from 'shared/types';

export const getOrderById = async (orderId: string): Promise<OrderType> => {
    const order = await instance.get(`/orders/${orderId}`).then((res) => res.data);

    return order;
};

export const getUserById = async (userId: string): Promise<UserType> => {
    const user = await instance.get(`/user/${userId}`).then((res) => res.data);

    return user;
};
