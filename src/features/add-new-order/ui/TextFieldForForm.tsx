import { FormControl, FormLabel, Input } from '@mui/joy';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { NewOrderType } from 'shared/types';

type TextFieldForFormProps = {
    name: keyof NewOrderType;
    control: Control<NewOrderType, unknown>;
};

export const TextFieldForForm: React.FC<TextFieldForFormProps> = ({ name, control }) => {
    return (
        <>
            {/* <FormControl>
                <FormLabel>{name}</FormLabel>
                <Input {...register(name, { required: true })} error={error} type={typeof value} />
            </FormControl> */}
            <Controller
                control={control}
                name={name}
                rules={{ required: true }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <FormControl>
                        <FormLabel>{name}</FormLabel>
                        <Input
                            value={value as string}
                            onChange={(event) => onChange(event.target.value)}
                            color={!error ? 'neutral' : 'danger'}
                            placeholder={name}
                            type={typeof name}
                        />
                    </FormControl>
                )}
            />
        </>
    );
};
