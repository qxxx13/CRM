import { instance } from 'shared/api';
import { NewRouteType } from 'shared/types/PromTypes';

export const createNewRoute = async (route: NewRouteType) => {
    const newRoute = await instance.post(`/prom/newRoute`, route).then((res) => res.data);

    return newRoute;
};
