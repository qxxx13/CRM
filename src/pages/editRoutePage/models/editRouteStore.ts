import { combine, createEffect, createEvent, createStore, restore } from 'effector';
import { CoordinatesType } from 'shared/types/PromTypes';

import { getCoordinatesByRouteId } from '../api/editRouteApi';

export const $editRouteStore = createStore<CoordinatesType[]>([]);

export const fetchCoordinatesFx = createEffect<{ routeId: string }, CoordinatesType[]>();

export const addNewCoordinatesToStore = createEvent<CoordinatesType>();

fetchCoordinatesFx.use((params) => getCoordinatesByRouteId(params.routeId));

$editRouteStore.on(fetchCoordinatesFx.doneData, (_, coordinates) => coordinates);
$editRouteStore.on(addNewCoordinatesToStore, (state, newCoordinate) => (state = [...state, newCoordinate]));

export const $fetchError = restore<Error>(fetchCoordinatesFx.failData, null);

export const $editRouteStoreGetStatus = combine({
    loading: fetchCoordinatesFx.pending,
    error: $fetchError,
    data: $editRouteStore,
});
