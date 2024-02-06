import { Button, Input, Option, Stack } from '@mui/joy';
import { SnackBar } from 'entities/index';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { NewOrderType, OrderStatusEnum, OrderVisitEnum, UserType } from 'shared/types';

import { addNewOrderFx } from '../model/addNewOrderStore';
import { initialValues } from '../model/initialValues';
import { DatePickerForForm } from './DatePickerForForm';
import { SelectFieldForForm } from './SelectFieldForForm';
import { TextFieldForForm } from './TextFieldForForm';

export const AddNewOrderForm: React.FC<{ users: UserType[] }> = ({ users }) => {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const { handleSubmit, reset, control, setValue, getValues } = useForm<NewOrderType>({
        defaultValues: initialValues,
    });

    const onSubmit: SubmitHandler<NewOrderType> = (data) => {
        setOpenSnackBar(true);
        addNewOrderFx(data);
        reset();
    };

    const { Visit, MasterId, Status, Date, Latitude, Longitude, TelephoneRecord, ClientPhoneNumber, ...textFields } =
        initialValues;

    const TextFields = Object.keys(textFields).map((key, index) => (
        <TextFieldForForm name={key as keyof NewOrderType} control={control} key={index} />
    ));

    const VisitOptions = Object.values(OrderVisitEnum).map((value, index) => (
        <Option value={value} key={index}>
            {value}
        </Option>
    ));

    const StatusOptions = Object.values(OrderStatusEnum).map((value, index) => (
        <Option value={value} key={index}>
            {value}
        </Option>
    ));

    const MasterOptions = users.map((user, index) => (
        <Option value={user.Id} key={index}>
            {user.UserName}
        </Option>
    ));

    const VisitSelectField = <SelectFieldForForm control={control} name="Visit" option={VisitOptions} />;
    const StatusSelectField = <SelectFieldForForm control={control} name="Status" option={StatusOptions} />;
    const MasterSelectField = <SelectFieldForForm control={control} name="MasterId" option={MasterOptions} />;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack sx={{ gap: 1 }}>
                <DatePickerForForm control={control} />
                <Controller
                    control={control}
                    name="ClientPhoneNumber"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputMask
                            mask="+7 999 999 99 99"
                            value={value}
                            onChange={(event) => onChange(event.target.value)}
                        >
                            {() => <Input color={!error ? 'neutral' : 'danger'} placeholder="clientPhoneNumber" />}
                        </InputMask>
                    )}
                ></Controller>
                {TextFields}
                {VisitSelectField}
                {StatusSelectField}
                {MasterSelectField}

                <Button type="submit">Submit</Button>
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
