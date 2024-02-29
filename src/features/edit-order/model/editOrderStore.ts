import { combine, createEffect, createStore, restore } from 'effector';
import { OrderType } from 'shared/types';

import { editOrder } from '../api/addNewOrderApi';

export const $editOrderStore = createStore<OrderType | Record<string, unknown>>({});

export const editOrderFx = createEffect<OrderType, OrderType>();

editOrderFx.use((newOrder) => editOrder(newOrder));

$editOrderStore.on(editOrderFx.doneData, (newOrder) => newOrder);

export const $fetchError = restore<Error>(editOrderFx.failData, null);

export const $ordersGetStatus = combine({
    loading: editOrderFx.pending,
    error: $fetchError,
    data: $editOrderStore,
});
