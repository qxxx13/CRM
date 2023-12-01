import { Button, Stack } from '@mui/joy';
import { Form, Formik } from 'formik';
import React from 'react';
import { NewOrderType } from 'shared/types';

import { addNewOrderFx } from '../model/addNewOrderStore';
import { initialValues } from '../model/initialValues';
import { validationSchema } from '../model/validationSchema';
import { FormikDateTimePicker } from './FormikDateTimePicker';
import { FormikMasterSelectField, FormikStatusSelectField, FormikVisitSelectField } from './FormikSelectField';
import { FormikTextField } from './FormikTextField';

const { Visit, Status, MasterId, OrderDateTime, ...textInitialValue } = initialValues;

export const AddNewOrderForm: React.FC = () => {
    const postRequest = (newOrder: NewOrderType) => addNewOrderFx(newOrder);

    const TextFields = () =>
        Object.keys(textInitialValue).map((field, index) => <FormikTextField name={field} key={index} />);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => postRequest(values)}
            validationSchema={validationSchema}
        >
            {(props) => (
                <Form>
                    <Stack sx={{ gap: '8px', mt: 2 }}>
                        <FormikDateTimePicker {...props} />
                        {TextFields()}
                        <FormikVisitSelectField {...props} />
                        <FormikMasterSelectField {...props} />
                        <FormikStatusSelectField {...props} />

                        <Button variant="outlined" type="submit">
                            Submit
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};
