import { instance } from 'shared/api';
import { OrderType } from 'shared/types';

export const patchOrderPrice = (id: string, price: string): Promise<OrderType> => {
    const togglePrice = instance.patch(`orders/price?id=${id}&price=${price}`).then((res) => res.data);

    return togglePrice;
};

export const patchOrderStatus = (id: string): Promise<OrderType> => {
    const toggleStatus = instance.patch(`orders/status?id=${id}&status=fulfilled`).then((res) => res.data);

    return toggleStatus;
};
