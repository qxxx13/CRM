export enum OrderStatusEnum {
    pending = 'pending',
    fulfilled = 'fulfilled',
    rejected = 'rejected',
    atWork = 'atWork',
}

export enum OrderVisitEnum {
    primary = 'primary',
    repeated = 'repeated',
}

export type OrderType = {
    Id: number;
    Description: string;
    Address: string;
    Date: Date;
    Time?: string;
    Visit?: OrderVisitEnum;
    ClientPhoneNumber: string;
    ClientName?: string;
    MasterId: number;
    AnnouncedPrice: string;
    Status: OrderStatusEnum;
    Price: string;
    TelephoneRecord?: string;
    Latitude?: number;
    Longitude?: number;
    MasterName?: string;
    Comments?: string;
};

export type GetOrdersType = {
    meta: {
        total: number;
        lastPage: number;
        currentPage: number;
        perPage: number;
        prev: number;
        next: number;
    };
    data: OrderType[];
};

type OmitType = {
    Id: string;
    Price: number;
};

export type CloseOrderType = {
    Total: string;
    Expenses: string;
    Comments?: string;
};

export type NewOrderType = Omit<OrderType, keyof OmitType>;
