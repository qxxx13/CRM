import { combine, createEffect, createStore, restore } from 'effector';
import { UserType } from 'shared/types';

import { getUserById } from '../api/orderInfoApi';

export const $userOrderInfoStore = createStore<UserType | Record<string, unknown>>({});

export const fetchUserByIdFx = createEffect<{ userId: string }, UserType>();

fetchUserByIdFx.use((params) => getUserById(params.userId));

$userOrderInfoStore.on(fetchUserByIdFx.doneData, (_, user) => user);

export const $fetchError = restore<Error>(fetchUserByIdFx.failData, null);

export const $userOrderInfoGetStatus = combine({
    loading: fetchUserByIdFx.pending,
    error: $fetchError,
    data: $userOrderInfoStore,
});
