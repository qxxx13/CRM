import { combine, createEffect, createStore, restore } from 'effector';
import { GetOrdersType, StatusEnum } from 'shared/types/OrderType';

import { fetchAllOrders } from '../api/ordersApi';

export const $orders = createStore<GetOrdersType>({ meta: {} as GetOrdersType['meta'], data: [] });

export const fetchOrdersFx = createEffect<
    { page: number; perPage: number; status: StatusEnum | 'all'; phoneNumber: string | 'all' },
    GetOrdersType
>();

fetchOrdersFx.use((params) => fetchAllOrders(params.page, params.perPage, params.status, params.phoneNumber));

$orders.on(fetchOrdersFx.doneData, (_, newOrders) => newOrders);

export const $fetchError = restore<Error>(fetchOrdersFx.failData, null);

export const $ordersGetStatus = combine({
    loading: fetchOrdersFx.pending,
    error: $fetchError,
    data: $orders,
});
