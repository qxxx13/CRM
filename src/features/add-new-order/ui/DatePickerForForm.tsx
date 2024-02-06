import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { NewOrderType } from 'shared/types';

export const DatePickerForForm: React.FC<{ control: Control<NewOrderType, unknown> }> = ({ control }) => {
    return (
        <Controller
            control={control}
            name="Date"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                        <DatePicker
                            label="OrderDateTime"
                            value={dayjs(value)}
                            onChange={(newValue) => onChange(dayjs(newValue))}
                            format="DD.MM.YYYY"
                        />
                    </DemoContainer>
                </LocalizationProvider>
            )}
        />
    );
};
