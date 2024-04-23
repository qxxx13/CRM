import { combine, createEffect, createStore, restore } from 'effector';
import { UserType } from 'shared/types';

import { getAllPromUsers } from '../api/userApi';

export const $getUsersStore = createStore<UserType[]>([]);

export const fetchUsersFx = createEffect<void, UserType[]>();

fetchUsersFx.use(() => getAllPromUsers());

$getUsersStore.on(fetchUsersFx.doneData, (_, users) => users);

export const $fetchError = restore<Error>(fetchUsersFx.failData, null);

export const $usersGetStatus = combine({
    loading: fetchUsersFx.pending,
    error: $fetchError,
    data: $getUsersStore,
});
