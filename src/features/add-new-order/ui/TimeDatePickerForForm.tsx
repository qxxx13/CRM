import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { NewOrderType } from 'shared/types';

export const TimeDatePickerForForm: React.FC<{ control: Control<NewOrderType, unknown> }> = ({ control }) => {
    return (
        <Controller
            control={control}
            name="OrderDateTime"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker
                            label="OrderDateTime"
                            value={dayjs(value)}
                            onChange={(newValue) => onChange(dayjs(newValue))}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            )}
        />
    );
};
