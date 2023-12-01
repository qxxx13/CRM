import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { FormikProps } from 'formik';
import { NewOrderType } from 'shared/types';

export const FormikDateTimePicker = (props: FormikProps<NewOrderType>) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                <DateTimePicker
                    label="DateTime"
                    value={dayjs(props.values.OrderDateTime)}
                    onChange={(newValue) => props.setFieldValue('OrderDateTime', dayjs(newValue).format())}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};
