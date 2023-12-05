import { Select } from '@mui/joy';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { NewOrderType } from 'shared/types';

type SelectFieldsType = {
    control: Control<NewOrderType, unknown>;
    name: keyof NewOrderType;
    option: JSX.Element[];
};

export const SelectFieldForForm: React.FC<SelectFieldsType> = ({ control, name, option }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                    value={value}
                    onChange={(event, value) => onChange(value)}
                    color={!error ? 'primary' : 'danger'}
                    placeholder={name}
                >
                    {option}
                </Select>
            )}
        />
    );
};
