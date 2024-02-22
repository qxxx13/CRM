import { instance } from 'shared/api';

export const getOrderById = async (orderId: string) => {
    const order = await instance.get(`/orders/${orderId}`).then((res) => res.data);

    return order;
};
