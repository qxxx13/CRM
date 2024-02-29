import { instance } from 'shared/api';
import { CloseOrderType, OrderType } from 'shared/types';

export const patchOrderStatus = (id: string): Promise<OrderType> => {
    const toggleStatus = instance.patch(`orders/status?id=${id}&status=fulfilled`).then((res) => res.data);

    return toggleStatus;
};

export const getInterestRate = (masterId: string) => {
    const interestRate = instance.get(`user/interest/${masterId}`).then((res) => res.data);

    return interestRate;
};

export const getMasterId = (orderId: string) => {
    const masterId = instance.get(`orders/masterId/${orderId}`).then((res) => res.data);

    return masterId;
};

export const closeOrder = (orderId: string, closeData: CloseOrderType) => {
    const closeOrder = instance.patch(`/orders/closeOrder/${orderId}`, closeData).then((res) => res.data);

    return closeOrder;
};

export const closeOrderMessage = (orderId: string, masterId: string) => {
    const closeMessage = instance.patch(`orders/closeOrderMessage?orderId=${orderId}&masterId=${masterId}`);

    return closeMessage;
};

export const getOrderById = async (orderId: string) => {
    const order = await instance.get(`/orders/${orderId}`).then((res) => res.data);

    return order;
};
