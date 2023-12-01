import { combine, createEffect, createStore, restore } from 'effector';
import { OrderType } from 'shared/types';

import { fetchAllOrders } from '../api/ordersApi';

export const $orders = createStore<OrderType[]>([]);

export const fetchOrdersFx = createEffect<void, OrderType[]>();

fetchOrdersFx.use(fetchAllOrders);

$orders.on(fetchOrdersFx.doneData, (_, newOrders) => newOrders);

export const $fetchError = restore<Error>(fetchOrdersFx.failData, null);

export const $ordersGetStatus = combine({
    loading: fetchOrdersFx.pending,
    error: $fetchError,
    data: $orders,
});
