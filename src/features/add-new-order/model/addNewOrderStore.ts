import { combine, createEffect, createStore, restore } from 'effector';
import { NewOrderType } from 'shared/types/OrderType';

import { postNewOrder } from '../api/api';

export const $addNewOrderStore = createStore<NewOrderType | Record<string, unknown>>({});

export const addNewOrderFx = createEffect<NewOrderType, NewOrderType>();

addNewOrderFx.use((t) => postNewOrder(t));

$addNewOrderStore.on(addNewOrderFx.doneData, (newOrder) => newOrder);

export const $fetchError = restore<Error>(addNewOrderFx.failData, null);

export const $ordersGetStatus = combine({
    loading: addNewOrderFx.pending,
    error: $fetchError,
    data: $addNewOrderStore,
});
