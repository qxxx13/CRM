import { Option } from '@mui/joy';
import { translate } from 'app/common/translate';
import { Control } from 'react-hook-form';
import { SelectFieldForForm, TextFieldForForm } from 'shared/index';
import { NewRouteType, RouteStatus } from 'shared/types/PromTypes';

import { initialValues } from './initialValues';

export const { Status, userId, DateTimeClose, ...textFields } = initialValues;

export const TextFields = (control: Control<NewRouteType, unknown>) =>
    Object.keys(textFields).map((key, index) => (
        <TextFieldForForm name={key as keyof NewRouteType} control={control} key={index} />
    ));

export const StatusOptions = Object.values(RouteStatus).map((value, index) => (
    <Option value={value} key={index}>
        {translate(value)}
    </Option>
));

export const StatusSelectField = (control: Control<NewRouteType, unknown>) => (
    <SelectFieldForForm control={control} name="Status" option={StatusOptions} />
);
