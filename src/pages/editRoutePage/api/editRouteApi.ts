import { instance } from 'shared/api';

export const getCoordinatesByRouteId = async (routeId: string) => {
    const coordinates = await instance.get(`/prom/coordinate?routeId=${routeId}`).then((res) => res.data);

    return coordinates;
};

export const addNewCoordinates = () => {
    return 1;
};
