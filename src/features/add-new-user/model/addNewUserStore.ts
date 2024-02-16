import { combine, createEffect, createStore, restore } from 'effector';
import { NewUserType } from 'shared/types/UserType';

import { postNewUser } from '../api/AddNewUserApi';

export const $addNewUserStore = createStore<NewUserType | Record<string, unknown>>({});

export const addNewUserFx = createEffect<NewUserType, NewUserType>();

addNewUserFx.use((t) => postNewUser(t));

$addNewUserStore.on(addNewUserFx.doneData, (newUser) => newUser);

export const $fetchError = restore<Error>(addNewUserFx.failData, null);

export const $UsersGetStatus = combine({
    loading: addNewUserFx.pending,
    error: $fetchError,
    data: $addNewUserStore,
});
