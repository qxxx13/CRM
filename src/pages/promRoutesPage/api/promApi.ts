import { instance } from 'shared/api';
import { CoordinatesType } from 'shared/types/PromTypes';

export const getAllRoutes = async () => {
    const routes = await instance.get('/prom').then((res) => res.data);

    return routes;
};

export const getRoutesByPromId = (promId: string) => {
    const routesById = instance.get(`/prom/${promId}`).then((res) => res.data);

    return routesById;
};

export const createNewCoordinate = (coordinate: CoordinatesType) => {
    const newCoordinate = instance.post(`/prom/newCoordinate`, coordinate).then((res) => res.data);

    return newCoordinate;
};
