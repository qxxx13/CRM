import { combine, createEffect, createStore, restore } from 'effector';
import { RouteType } from 'shared/types/PromTypes';

import { getAllRoutes } from '../api/promApi';

export const $promRoutesStore = createStore<RouteType[]>([]);

export const fetchRoutesFx = createEffect<void, RouteType[]>();

fetchRoutesFx.use(() => getAllRoutes());

$promRoutesStore.on(fetchRoutesFx.doneData, (_, routes) => routes);

export const $fetchError = restore<Error>(fetchRoutesFx.failData, null);

export const $promRotesStoreGetStatus = combine({
    loading: fetchRoutesFx.pending,
    error: $fetchError,
    data: $promRoutesStore,
});
