export enum StatusEnum {
    pending = 'pending',
    fulfilled = 'fulfilled',
    rejected = 'rejected',
}

export enum VisitEnum {
    primary = 'primary',
    repeated = 'repeated',
}

export type OrderType = {
    Id: number;
    Description: string;
    Address: string;
    OrderDateTime: Date;
    Visit: VisitEnum;
    ClientPhoneNumber: string;
    ClientName: string;
    MasterId: number;
    MasterName: string;
    AnnouncedPrice?: number;
    Price: number;
    Status: StatusEnum;
    TelephoneRecord: string;
    Latitude: number;
    Longitude: number;
};

type OmitType = {
    Id: string;
    Price: number;
};

export type NewOrderType = Omit<OrderType, keyof OmitType>;
