import { instance } from 'shared/api';
import { NewCoordinateType } from 'shared/types/PromTypes';

export const getCoordinatesByRouteId = async (routeId: string) => {
    const coordinates = await instance.get(`/prom/coordinate?routeId=${routeId}`).then((res) => res.data);

    return coordinates;
};

export const addNewCoordinate = async (coordinate: NewCoordinateType) => {
    const add = await instance.post(`/prom/newCoordinate`, coordinate);

    return add;
};

export const sendToProm = async (promId: number, routeId: number) => {
    const send = await instance.patch(`/prom/sendRoute?promId=${promId}&routeId=${routeId}`).then((res) => res.data);

    return send;
};
