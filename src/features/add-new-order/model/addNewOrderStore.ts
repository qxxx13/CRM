import { combine, createEffect, createStore, restore } from 'effector';
import { NewOrderType } from 'shared/types';

import { postNewOrder } from '../api/addNewOrderApi';

export const $addNewOrderStore = createStore<NewOrderType | Record<string, unknown>>({});

export const addNewOrderFx = createEffect<NewOrderType, NewOrderType>();

addNewOrderFx.use((newOrder) => postNewOrder(newOrder));

$addNewOrderStore.on(addNewOrderFx.doneData, (newOrder) => newOrder);

export const $fetchError = restore<Error>(addNewOrderFx.failData, null);

export const $ordersGetStatus = combine({
    loading: addNewOrderFx.pending,
    error: $fetchError,
    data: $addNewOrderStore,
});
