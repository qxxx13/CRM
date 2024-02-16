import { instance } from 'shared/api';

export const deleteOrder = (id: number) => {
    const deleteOrderById = instance.delete(`orders/${id}`);

    return deleteOrderById;
};
