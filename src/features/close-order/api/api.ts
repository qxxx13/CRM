import { instance } from 'shared/api';
import { OrderType } from 'shared/types';

export const patchOrderPrice = (id: string, price: string): Promise<OrderType> => {
    const togglePrice = instance.patch(`orders/price?id=${id}&price=${price}`).then((res) => res.data);

    return togglePrice;
};

export const patchMasterSalary = (id: string, salary: string): Promise<OrderType> => {
    const toggleMasterSalary = instance.patch(`orders/masterSalary?id=${id}&price=${salary}`).then((res) => res.data);

    return toggleMasterSalary;
};

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

export const closeOrderMessage = (orderId: string, masterId: string) => {
    const test = instance.get(`orders/closeOrderMessage?orderId=${orderId}&masterId=${masterId}`);

    return test;
};
