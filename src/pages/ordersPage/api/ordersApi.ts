import { instance } from 'shared/api';
import { OrderType } from 'shared/types';

export const fetchAllOrders = async (): Promise<OrderType[]> => {
    const orders = await instance.get('orders').then((res) => res.data);

    return orders;
};

export const fetchOrderById = (id: string): Promise<OrderType> => {
    const order = instance.get(`orders/${id}`).then((res) => res.data);

    return order;
};
