import { FormControl, FormLabel, Input } from '@mui/joy';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { NewUserType } from 'shared/types';

type TextFieldForFormProps = {
    name: keyof NewUserType;
    register: UseFormRegister<NewUserType>;
    value: string | number;
    error: boolean;
};

export const TextFieldForForm: React.FC<TextFieldForFormProps> = ({ name, register, error, value }) => {
    return (
        <FormControl>
            <FormLabel>{name}</FormLabel>
            <Input {...register(name, { required: true })} error={error} type={typeof value} />
        </FormControl>
    );
};
