import { instance } from 'shared/api';
import { OrderType } from 'shared/types/OrderType';

export const editOrder = (editedOrder: OrderType): Promise<OrderType> => {
    const order = instance.post('orders/edit', editedOrder).then((res) => res.data);

    return order;
};
