import { createEvent, createStore } from 'effector';

export const setOrdersPage = createEvent<number>();

export const $paginationStore = createStore(1).on(setOrdersPage, (page, value) => (page = value));
