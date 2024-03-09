import { Button, Input, Stack } from '@mui/joy';
import { translate } from 'app/common/translate';
import { SnackBar } from 'entities/index';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { NewOrderType, OrderStatusEnum, UserType } from 'shared/types';

import { addNewOrderFx } from '../model/addNewOrderStore';
import { MasterSelectField, OrderTypeSelectField, TextFields, VisitSelectField } from '../model/FieldsForForm';
import { initialValues } from '../model/initialValues';
import { DatePickerForForm } from './DatePickerForForm';

export const AddNewOrderForm: React.FC<{ users: UserType[] }> = ({ users }) => {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const { handleSubmit, reset, control } = useForm<NewOrderType>({
        defaultValues: initialValues,
    });

    const handleSendMaster: SubmitHandler<NewOrderType> = (data) => {
        setOpenSnackBar(true);
        addNewOrderFx(data);
        reset();
    };

    const handleSendSendToDistribution: SubmitHandler<NewOrderType> = (data) => {
        data.Status = OrderStatusEnum.distribution;
        addNewOrderFx(data);
        setOpenSnackBar(true);
        reset();
    };

    return (
        <form>
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
                {OrderTypeSelectField(control)}
                {MasterSelectField(control, users)}

                <Button color="warning" onClick={handleSubmit((newOrder) => handleSendSendToDistribution(newOrder))}>
                    На распределение
                </Button>
                <Button type="submit" color="success" onClick={handleSubmit((newOrder) => handleSendMaster(newOrder))}>
                    Создать и отправить мастеру
                </Button>
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
