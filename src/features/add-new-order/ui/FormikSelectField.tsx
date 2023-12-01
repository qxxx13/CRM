import { Option, Select } from '@mui/joy';
import { FormikProps } from 'formik';
import React from 'react';
import { NewOrderType } from 'shared/types';

//TODO FIX IT PLEASE (PIZDA)
export const FormikVisitSelectField = (props: FormikProps<NewOrderType>) => {
    return (
        <Select
            variant="outlined"
            name="Visit"
            value={props.values.Visit}
            onChange={(event: React.SyntheticEvent | null, newValue: string | null) =>
                props.setFieldValue('Visit', newValue)
            }
        >
            <Option value={'primary'}>primary</Option>
            <Option value={'repeated'}>repeated</Option>
        </Select>
    );
};

export const FormikStatusSelectField = (props: FormikProps<NewOrderType>) => {
    return (
        <Select
            variant="outlined"
            name="Status"
            value={props.values.Status}
            onChange={(event: React.SyntheticEvent | null, newValue: string | null) =>
                props.setFieldValue('Status', newValue)
            }
        >
            <Option value={'pending'}>Pending</Option>
            <Option value={'fulfilled'}>Fulfilled</Option>
            <Option value={'rejected'}>Rejected</Option>
        </Select>
    );
};

export const FormikMasterSelectField = (props: FormikProps<NewOrderType>) => {
    return (
        <Select
            variant="outlined"
            name="MasterId"
            value={props.values.MasterId}
            onChange={(event: React.SyntheticEvent | null, newValue: number | null) =>
                props.setFieldValue('MasterId', newValue)
            }
        >
            <Option value={1}>Fidda</Option>
            <Option value={2}>User</Option>
        </Select>
    );
};
