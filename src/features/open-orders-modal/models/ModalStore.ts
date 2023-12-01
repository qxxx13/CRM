import { createEvent, createStore } from 'effector';

export const openModal = createEvent();
export const closeModal = createEvent();

export const $modalStore = createStore(false)
    .on(openModal, () => true)
    .on(closeModal, () => false);
