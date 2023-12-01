import { createEvent, createStore } from 'effector';

export const openUsersModal = createEvent();
export const closeUsersModal = createEvent();

export const $usersModalStore = createStore(false)
    .on(openUsersModal, () => true)
    .on(closeUsersModal, () => false);
