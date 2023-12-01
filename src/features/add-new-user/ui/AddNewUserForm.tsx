import { Button, Stack } from '@mui/joy';
import { Form, Formik } from 'formik';
import React from 'react';
import { NewUserType } from 'shared/types';

import { addNewUserFx } from '../model/addNewUserStore';
import { initialValues } from '../model/initialValues';
import { validationSchema } from '../model/validationSchema';
import { FormikTextField } from './FormikTextField';

export const AddNewUserForm: React.FC = () => {
    const postRequest = (newUser: NewUserType) => addNewUserFx(newUser);

    const TextFields = () =>
        Object.keys(initialValues).map((field, index) => <FormikTextField name={field} key={index} />);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(newUser) => postRequest(newUser)}
        >
            {(props) => (
                <Form>
                    <Stack sx={{ gap: '8px', mt: 2 }}>
                        {TextFields()}
                        <Button variant="outlined" type="submit">
                            Submit
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};
