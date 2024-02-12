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

export const patchTotalPrice = (id: string, totalPrice: string): Promise<OrderType> => {
    const toggleTogglePrice = instance.patch(`orders/total?id=${id}&totalPrice=${totalPrice}`).then((res) => res.data);

    return toggleTogglePrice;
};

export const patchExpenses = (id: string, expenses: string): Promise<OrderType> => {
    const toggleStatus = instance.patch(`orders/expenses?id=${id}&expenses=${expenses}`).then((res) => res.data);

    return toggleStatus;
};

export const patchCompanyShare = (id: string, companyShare: string): Promise<OrderType> => {
    const toggleCompanyShare = instance
        .patch(`orders/companyShare?id=${id}&companyShare=${companyShare}`)
        .then((res) => res.data);

    return toggleCompanyShare;
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
    const test = instance.patch(`orders/closeOrderMessage?orderId=${orderId}&masterId=${masterId}`);

    return test;
};
