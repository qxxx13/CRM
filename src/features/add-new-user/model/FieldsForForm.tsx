import { Option } from '@mui/joy';
import { translate } from 'app/common/translate';
import { Control } from 'react-hook-form';
import { SelectFieldForForm, TextFieldForForm } from 'shared/index';
import { NewUserType, RoleEnum } from 'shared/types';

import { initialValues } from './initialValues';

const { Role, IsOnline, Status, InterestRate, ...textFields } = initialValues;

export const TextFields = (control: Control<NewUserType, unknown>) =>
    Object.keys(textFields).map((key, index) => (
        <TextFieldForForm name={key as keyof NewUserType} control={control} key={index} />
    ));

export const RoleOptions = Object.values(RoleEnum).map((value, index) => (
    <Option value={value} key={index}>
        {translate(value)}
    </Option>
));

export const RoleSelectField = (control: Control<NewUserType, unknown>) => (
    <SelectFieldForForm control={control} name="Role" option={RoleOptions} />
);
