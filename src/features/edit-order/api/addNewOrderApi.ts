import { instance } from 'shared/api';
import { OrderType } from 'shared/types/OrderType';

export const editOrder = (editedOrder: OrderType): Promise<OrderType> => {
    const order = instance.post('orders/edit', editedOrder).then((res) => res.data);

    return order;
};

export const sendToMaster = async (editedOrder: OrderType) => {
    try {
        await instance.post('bot/create', editedOrder).then((res) => res.data);
        await instance.patch(`bot/deleteDistribution?messageId=${editedOrder.DistributionOrderMessageId}`);
        await instance.post('orders/edit', editedOrder).then((res) => res.data);
    } catch (error) {
        console.log(error);
    }
};

export const transferOrder = async (editedOrder: OrderType) => {
    try {
        await instance.post(`orders/edit`, editedOrder).then((res) => res.data);
        await instance.patch(`bot/transfer?orderId=${editedOrder.Id}`).then((res) => res.data);
    } catch (error) {
        console.log(error);
    }
};
