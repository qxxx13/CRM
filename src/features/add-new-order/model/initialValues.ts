import { NewOrderType, StatusEnum, VisitEnum } from 'shared/types';

export const initialValues: NewOrderType = {
    OrderDateTime: new Date(),
    Address: '',
    Visit: VisitEnum.primary,
    ClientPhoneNumber: '',
    ClientName: '',
    MasterName: '',
    AnnouncedPrice: 0,
    Description: '',
    Latitude: 0,
    Longitude: 0,
    MasterId: 1,
    Status: StatusEnum.pending,
    TelephoneRecord: 'url',
};
