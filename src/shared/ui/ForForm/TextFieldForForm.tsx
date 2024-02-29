import { FormControl, FormLabel, Input } from '@mui/joy';
import { translate } from 'app/common/translate';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

type Props<T, U> = {
    name: U;
    control: T;
};

export const TextFieldForForm = <T extends Control<any, unknown>, U extends string>({
    name,
    control,
}: Props<T, U>): JSX.Element => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <FormControl>
                    <FormLabel>{translate(name)}</FormLabel>
                    <Input
                        value={value as string}
                        onChange={(event) => onChange(event.target.value)}
                        color={!error ? 'neutral' : 'danger'}
                        placeholder={translate(name)}
                        type={typeof value}
                    />
                </FormControl>
            )}
        />
    );
};
