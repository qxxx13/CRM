export type CoordinatesType = {
    Id: number;
    Latitude: string;
    Longitude: string; // Долгота
    RouteId: number;
    MapUrl?: string;
};

export enum RouteStatus {
    pending = 'pending', // Ожидает
    active = 'active', // Активен
    atWork = 'atWork', // В Работе
}

export type RouteType = {
    Id: number;
    City: string;
    userId: number;
    Stage: number;
    Status: RouteStatus;
    DateTimeClose: Date;
};

export type NewRouteType = Omit<RouteType, 'Id'>;
export type NewCoordinateType = Omit<CoordinatesType, 'Id'>;
