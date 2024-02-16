import { Select } from '@mui/joy';
import { translate } from 'app/common/translate';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

type Props<T, U> = {
    control: T;
    name: U;
    option: JSX.Element[];
};

export const SelectFieldForForm = <T extends Control<any, unknown>, U extends string>({
    control,
    name,
    option,
}: Props<T, U>) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                    value={value}
                    onChange={(event, value) => onChange(value)}
                    color={!error ? 'primary' : 'danger'}
                    placeholder={translate(name)}
                >
                    {option}
                </Select>
            )}
        />
    );
};
