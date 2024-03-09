import { Option } from '@mui/joy';
import { translate } from 'app/common/translate';
import { Control } from 'react-hook-form';
import { SelectFieldForForm, TextFieldForForm } from 'shared/index';
import { OrderVisitEnum, UserType } from 'shared/types';
import { OrderType, OrderTypeEnum } from 'shared/types/OrderType';

export const TextFields = (control: Control<OrderType, unknown>, initialValues: OrderType) => {
    const {
        Visit,
        MasterId,
        Status,
        Date,
        Latitude,
        Longitude,
        TelephoneRecord,
        Type,
        Id,
        ClientPhoneNumber,
        ActiveOrderMessageId,
        AllOrdersMessageId,
        DistributionOrderMessageId,
        ...textFields
    } = initialValues;

    return Object.keys(textFields).map((key, index) => (
        <TextFieldForForm name={key as keyof OrderType} control={control} key={index} />
    ));
};

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
            {user.UserName}
        </Option>
    ));

export const VisitSelectField = (control: Control<OrderType, unknown>) => (
    <SelectFieldForForm control={control} name="Visit" option={VisitOptions} />
);
export const MasterSelectField = (control: Control<OrderType, unknown>, users: UserType[]) => (
    <SelectFieldForForm control={control} name="MasterId" option={MasterOptions(users)} />
);
export const OrderTypeSelectField = (control: Control<OrderType, unknown>) => (
    <SelectFieldForForm control={control} name="Type" option={TypeOptions} />
);