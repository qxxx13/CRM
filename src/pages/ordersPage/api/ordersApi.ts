import { instance } from 'shared/api';
import { OrderType } from 'shared/types';
import { GetOrdersType } from 'shared/types/OrderType';

export const fetchAllOrders = async (page: number, perPage: number): Promise<GetOrdersType> => {
    const orders = await instance.get(`orders?page=${page}&perPage=${perPage}`).then((res) => res.data);

    return orders;
};

export const fetchOrderById = (id: string): Promise<OrderType> => {
    const order = instance.get(`orders/${id}`).then((res) => res.data);

    return order;
};
