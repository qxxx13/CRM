import { combine, createEffect, createStore, restore } from 'effector';
import { OrderType } from 'shared/types/OrderType';

import { getOrderById } from '../api/orderInfoApi';

export const $orderInfoStore = createStore<OrderType | Record<string, unknown>>({});

export const fetchOrderFx = createEffect<{ orderId: string }, OrderType>();

fetchOrderFx.use((params) => getOrderById(params.orderId));

$orderInfoStore.on(fetchOrderFx.doneData, (_, order) => order);

export const $fetchError = restore<Error>(fetchOrderFx.failData, null);

export const $orderInfoStoreGetStatus = combine({
    loading: fetchOrderFx.pending,
    error: $fetchError,
    data: $orderInfoStore,
});
