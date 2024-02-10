import { createEvent, createStore } from 'effector';
import { OrderStatusEnum } from 'shared/types';

export const $statusFiltersStore = createStore<OrderStatusEnum | 'all'>('all');
export const $phoneNumberFilterStore = createStore('');

export const setStatusFilter = createEvent<OrderStatusEnum | 'all'>();
export const setPhoneNumberFilter = createEvent<string>();

$statusFiltersStore.on(setStatusFilter, (status, value) => (status = value));
$phoneNumberFilterStore.on(setPhoneNumberFilter, (phoneNumber, value) => (phoneNumber = value));
