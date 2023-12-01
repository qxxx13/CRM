import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    OrderDateTime: yup.date().required('Required'),
    Address: yup.string().required('Required'),
    ClientPhoneNumber: yup.string().required('Required'),
    ClientName: yup.string().required('Required'),
    MasterName: yup.string().required('Required'),
    AnnouncedPrice: yup.number().required('Required'),
    Description: yup.string().required('Required'),
    Latitude: yup.number().required('Required'),
    Longitude: yup.number().required('Required'),
    TelephoneRecord: yup.string().required('Required'),
});
