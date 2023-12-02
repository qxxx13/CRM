import { FormControl, FormLabel, Input, InputProps } from '@mui/joy';
import { useField } from 'formik';
import React from 'react';

export const FormikTextField = (props: InputProps) => {
    const [field, meta] = useField(props.name as string);
    const textFieldProps = field ? field : props;
    const hasError = Boolean(meta && meta.touched && meta.error);

    return (
        <FormControl>
            <FormLabel>{props.name}</FormLabel>
            <Input
                {...props}
                name={textFieldProps.name}
                onChange={textFieldProps.onChange}
                onBlur={textFieldProps.onBlur}
                value={textFieldProps.value}
                error={hasError}
                type={typeof textFieldProps.value}
            />
        </FormControl>
    );
};
