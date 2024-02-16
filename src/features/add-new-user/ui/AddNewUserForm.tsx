import { Button, Stack } from '@mui/joy';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewUserType } from 'shared/types';

import { addNewUserFx } from '../model/addNewUserStore';
import { RoleSelectField, TextFields } from '../model/FieldsForForm';
import { initialValues } from '../model/initialValues';
export const AddNewUserForm: React.FC = () => {
    const { handleSubmit, reset, control } = useForm<NewUserType>({ defaultValues: initialValues });

    const onSubmit: SubmitHandler<NewUserType> = (data) => {
        addNewUserFx(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack sx={{ gap: 1 }}>
                {TextFields(control)}
                {RoleSelectField(control)}
                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    );
};
