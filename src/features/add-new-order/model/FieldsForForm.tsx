import { Option } from '@mui/joy';
import { translate } from 'app/common/translate';
import { Control } from 'react-hook-form';
import { SelectFieldForForm, TextFieldForForm } from 'shared/index';
import { NewOrderType, OrderVisitEnum, UserType } from 'shared/types';
import { OrderTypeEnum } from 'shared/types/OrderType';

import { initialValues } from './initialValues';

export const {
    Visit,
    MasterId,
    Status,
    Date,
    Latitude,
    Longitude,
    TelephoneRecord,
    ClientPhoneNumber,
    Type,
    ...textFields
} = initialValues;

export const TextFields = (control: Control<NewOrderType, unknown>) =>
    Object.keys(textFields).map((key, index) => (
        <TextFieldForForm name={key as keyof NewOrderType} control={control} key={index} />
    ));

export const VisitOptions = Object.values(OrderVisitEnum).map((value, index) => (
    <Option value={value} key={index}>
        {translate(value)}
    </Option>
));

export const TypeOptions = Object.values(OrderTypeEnum).map((value, index) => (
    <Option value={value} key={index}>
        {translate(value)}
    </Option>
));

export const MasterOptions = (users: UserType[]) =>
    users.map((user, index) => (
        <Option value={user.Id} key={index}>
            {user.UserName} ({user.Region})
        </Option>
    ));

export const VisitSelectField = (control: Control<NewOrderType, unknown>) => (
    <SelectFieldForForm control={control} name="Visit" option={VisitOptions} />
);
export const MasterSelectField = (control: Control<NewOrderType, unknown>, users: UserType[]) => (
    <SelectFieldForForm control={control} name="MasterId" option={MasterOptions(users)} />
);
export const OrderTypeSelectField = (control: Control<NewOrderType, unknown>) => (
    <SelectFieldForForm control={control} name="Type" option={TypeOptions} />
);
