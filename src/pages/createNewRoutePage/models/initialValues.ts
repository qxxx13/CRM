import { NewRouteType, RouteStatus } from 'shared/types/PromTypes';

export const initialValues: NewRouteType = {
    City: '',
    DateTimeClose: new Date(),
    Stage: 0,
    Status: RouteStatus.pending,
    userId: 1,
};
