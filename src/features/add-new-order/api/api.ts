import { instance } from 'shared/api';
import { NewOrderType } from 'shared/types/OrderType';

export const postNewOrder = (newOrder: NewOrderType): Promise<NewOrderType> => {
    const add = instance.post('orders', newOrder).then((res) => res.data);

    return add;
};
