import { combine, createEffect, createEvent, createStore, restore } from 'effector';
import { CloseOrderType, OrderType } from 'shared/types/OrderType';

import { patchOrderPrice } from '../api/api';

export const $CloseOrderStore = createStore<CloseOrderType | Record<string, unknown>>({});

export const CloseOrderFx = createEffect<{ id: string; price: string }, OrderType>();

CloseOrderFx.use(({ id, price }) => patchOrderPrice(id, price));

$CloseOrderStore.on(CloseOrderFx.doneData, (CloseOrder) => CloseOrder);

export const $fetchError = restore<Error>(CloseOrderFx.failData, null);

export const $CloseOrderGetStatus = combine({
    loading: CloseOrderFx.pending,
    error: $fetchError,
    data: $CloseOrderStore,
});
