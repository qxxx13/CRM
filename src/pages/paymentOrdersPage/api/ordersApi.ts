import { instance } from 'shared/api';
import { OrderType } from 'shared/types';
import { GetOrdersType, OrderStatusEnum } from 'shared/types/OrderType';

export const fetchAllOrders = async (
    page: number,
    perPage: number,
    phoneNumber: string | '',
    userId: string,
): Promise<GetOrdersType> => {
    const orders = await instance
        .get(
            `orders/?page=${page}&perPage=${perPage}&searchValue=${phoneNumber}&masterId=${userId}&status=awaitingPayment`,
        )
        .then((res) => res.data);

    return orders;
};

export const fetchOrderById = (id: string): Promise<OrderType> => {
    const order = instance.get(`orders/${id}`).then((res) => res.data);

    return order;
};
