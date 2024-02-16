import { Button, Input, Stack } from '@mui/joy';
import { translate } from 'app/common/translate';
import { SnackBar } from 'entities/index';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { NewOrderType, UserType } from 'shared/types';

import { addNewOrderFx } from '../model/addNewOrderStore';
import { MasterSelectField, TextFields, VisitSelectField } from '../model/FieldsForForm';
import { initialValues } from '../model/initialValues';
import { DatePickerForForm } from './DatePickerForForm';

export const AddNewOrderForm: React.FC<{ users: UserType[] }> = ({ users }) => {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const { handleSubmit, reset, control } = useForm<NewOrderType>({
        defaultValues: initialValues,
    });

    const onSubmit: SubmitHandler<NewOrderType> = (data) => {
        setOpenSnackBar(true);
        addNewOrderFx(data);
        reset();
    };

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
                {TextFields(control)}
                {VisitSelectField(control)}
                {MasterSelectField(control, users)}

                <Button type="submit">{translate('Submit')}</Button>
                <SnackBar
                    color="success"
                    message="Order successfully added"
                    open={openSnackBar}
                    setOpen={setOpenSnackBar}
                />
            </Stack>
        </form>
    );
};
