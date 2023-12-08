import { createEvent, createStore } from 'effector';
import { StatusEnum } from 'shared/types';

export const $statusFiltersStore = createStore<StatusEnum | 'all'>('all');
export const $phoneNumberFilterStore = createStore('');

export const setStatusFilter = createEvent<StatusEnum | 'all'>();
export const setPhoneNumberFilter = createEvent<string>();

$statusFiltersStore.on(setStatusFilter, (status, value) => (status = value));
$phoneNumberFilterStore.on(setPhoneNumberFilter, (phoneNumber, value) => (phoneNumber = value));
