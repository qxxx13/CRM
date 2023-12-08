import { Button, Option, Stack } from '@mui/joy';
import { SnackBar } from 'entities/index';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewOrderType, StatusEnum, UserType, VisitEnum } from 'shared/types';

import { addNewOrderFx } from '../model/addNewOrderStore';
import { initialValues } from '../model/initialValues';
import { SelectFieldForForm } from './SelectFieldForForm';
import { TextFieldForForm } from './TextFieldForForm';
import { TimeDatePickerForForm } from './TimeDatePickerForForm';

export const AddNewOrderForm: React.FC<{ users: UserType[] }> = ({ users }) => {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const { register, handleSubmit, reset, control } = useForm<NewOrderType>({ defaultValues: initialValues });

    const onSubmit: SubmitHandler<NewOrderType> = (data) => {
        setOpenSnackBar(true);
        addNewOrderFx(data);
        reset();
    };

    const { Visit, MasterId, Status, OrderDateTime, ...textFields } = initialValues;

    const TextFields = Object.entries(textFields).map((entry, index) => {
        const [key, value] = entry;
        return (
            <TextFieldForForm
                name={key as keyof NewOrderType}
                register={register}
                error={false}
                key={index}
                value={value}
            />
        );
    });

    const VisitOptions = Object.values(VisitEnum).map((value, index) => (
        <Option value={value} key={index}>
            {value}
        </Option>
    ));

    const StatusOptions = Object.values(StatusEnum).map((value, index) => (
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
                <TimeDatePickerForForm control={control} />
                {TextFields}
                {VisitSelectField}
                {StatusSelectField}
                {MasterSelectField}
                <Button type="submit">Submit</Button>
                <SnackBar
                    color="success"
                    message="Order succefully added"
                    open={openSnackBar}
                    setOpen={setOpenSnackBar}
                />
            </Stack>
        </form>
    );
};
