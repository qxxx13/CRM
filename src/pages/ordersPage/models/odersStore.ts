import { combine, createEffect, createStore, restore } from 'effector';
import { GetOrdersType } from 'shared/types/OrderType';

import { fetchAllOrders } from '../api/ordersApi';

export const $orders = createStore<GetOrdersType>({ meta: {} as GetOrdersType['meta'], data: [] });

export const fetchOrdersFx = createEffect<{ page: number; perPage: number }, GetOrdersType>();

fetchOrdersFx.use((params) => fetchAllOrders(params.page, params.perPage));

$orders.on(fetchOrdersFx.doneData, (_, newOrders) => newOrders);

export const $fetchError = restore<Error>(fetchOrdersFx.failData, null);

export const $ordersGetStatus = combine({
    loading: fetchOrdersFx.pending,
    error: $fetchError,
    data: $orders,
});
