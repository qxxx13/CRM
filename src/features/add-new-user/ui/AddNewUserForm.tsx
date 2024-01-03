import { Button, Option, Select, Stack } from '@mui/joy';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { NewUserType } from 'shared/types';

import { addNewUserFx } from '../model/addNewUserStore';
import { initialValues } from '../model/initialValues';
import { TextFieldForForm } from './TextFieldForForm';
export const AddNewUserForm: React.FC = () => {
    const { register, handleSubmit, reset, control } = useForm<NewUserType>({ defaultValues: initialValues });

    const onSubmit: SubmitHandler<NewUserType> = (data) => {
        console.log(data);
        reset();
    };

    const { Role, isOnline, ...textFields } = initialValues;

    const TextFields = Object.entries(textFields).map((entry, index) => {
        const [key, value] = entry;
        return (
            <TextFieldForForm
                name={key as keyof NewUserType}
                register={register}
                value={value}
                error={false}
                key={index}
            />
        );
    });

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
