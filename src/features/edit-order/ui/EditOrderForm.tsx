import { Button, Input, Stack } from '@mui/joy';
import { translate } from 'app/common/translate';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { NewOrderType, OrderType, UserType } from 'shared/types';

import { editOrderFx } from '../model/editOrderStore';
import { MasterSelectField, OrderTypeSelectField, TextFields, VisitSelectField } from '../model/FieldsForForm';
import { initialValues } from '../model/initialValues';
import { DatePickerForForm } from './DatePickerForForm';

export const EditOrderForm: React.FC<{ users: UserType[]; order: OrderType }> = ({ users, order }) => {
    const { handleSubmit, reset, control } = useForm<OrderType>({
        defaultValues: initialValues(order),
    });

    const onSubmit: SubmitHandler<OrderType> = (data) => {
        editOrderFx(data);
    };

    const textFields = TextFields(control, initialValues(order));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack sx={{ gap: 1 }}>
                <DatePickerForForm control={control} />
                <Controller
                    control={control}
                    name="ClientPhoneNumber"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputMask
                            mask="+7-999-999-99-99"
                            value={value}
                            onChange={(event) => onChange(event.target.value)}
                        >
                            {() => (
                                <Input
                                    color={!error ? 'neutral' : 'danger'}
                                    placeholder={translate('clientPhoneNumber')}
                                />
                            )}
                        </InputMask>
                    )}
                ></Controller>
                {textFields}
                {VisitSelectField(control)}
                {OrderTypeSelectField(control)}
                {MasterSelectField(control, users)}

                <Button type="submit">{translate('Save')}</Button>
                <Button color="warning">Выслать мастеру</Button>
            </Stack>
        </form>
    );
};
