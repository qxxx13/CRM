import { NewOrderType, OrderStatusEnum, OrderVisitEnum } from 'shared/types';

export const initialValues: NewOrderType = {
    Date: new Date(),
    Address: '',
    Visit: OrderVisitEnum.primary,
    ClientPhoneNumber: '',
    ClientName: '',
    MasterName: '',
    AnnouncedPrice: '0',
    Description: '',
    Latitude: 0,
    Longitude: 0,
    MasterId: 1,
    Status: OrderStatusEnum.pending,
    TelephoneRecord: 'url',
    Time: 'после обеда',
};
