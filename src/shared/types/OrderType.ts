export enum OrderStatusEnum {
    pending = 'pending',
    fulfilled = 'fulfilled',
    rejected = 'rejected',
    atWork = 'atWork',
}

export enum OrderVisitEnum {
    primary = 'primary',
    repeated = 'repeated',
    guarantee = 'guarantee',
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
    MessageId?: string;
    MasterSalary?: string;
    Total: number;
    Expenses: number;
    CompanyShare: number;
    ClosingOrderId?: number;
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
    Total: number;
    Expenses: number;
};

export type CloseOrderType = {
    Total: string;
    Expenses: string;
    Comments?: string;
    Salary?: number;
};

export type NewOrderType = Omit<OrderType, keyof OmitType>;
