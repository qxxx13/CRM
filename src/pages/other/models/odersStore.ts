import { combine, createEffect, createStore, restore } from 'effector';
import { OrderType } from 'shared/types/OrderType';

import { getOrderById } from '../api/api';

export const $order = createStore<OrderType | Record<string, keyof unknown>>({});

export const fetchOrderFx = createEffect<{ orderId: string }, OrderType>();

fetchOrderFx.use((params) => getOrderById(params.orderId));

$order.on(fetchOrderFx.doneData, (_, newOrders) => newOrders);

export const $fetchError = restore<Error>(fetchOrderFx.failData, null);

export const $orderGetStatus = combine({
    loading: fetchOrderFx.pending,
    error: $fetchError,
    data: $order,
});
