import { Button, Option, Select, Stack } from '@mui/joy';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { NewUserType } from 'shared/types';

import { addNewUserFx } from '../model/addNewUserStore';
import { initialValues } from '../model/initialValues';
import { TextFieldForForm } from './TextFieldForForm';
export const AddNewUserForm: React.FC = () => {
    const { handleSubmit, reset, control } = useForm<NewUserType>({ defaultValues: initialValues });

    const onSubmit: SubmitHandler<NewUserType> = (data) => {
        addNewUserFx(data);
        reset();
    };

    const { Role, IsOnline, Status, InterestRate, ...textFields } = initialValues;

    const TextFields = Object.keys(textFields).map((key, index) => (
        <TextFieldForForm name={key as keyof NewUserType} control={control} key={index} />
    ));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack sx={{ gap: 1 }}>
                {TextFields}
                <Controller
                    control={control}
                    name="Role"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Select
                            value={value}
                            onChange={(event, value) => onChange(value)}
                            color={!error ? 'primary' : 'danger'}
                            placeholder="Role"
                        >
                            <Option value="master">Master</Option>
                            <Option value="admin">Admin</Option>
                        </Select>
                    )}
                />
                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    );
};
