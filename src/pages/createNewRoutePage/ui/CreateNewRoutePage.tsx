import { Button, Stack, Typography } from '@mui/joy';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewRouteType } from 'shared/types/PromTypes';

import { createNewRoute } from '../api/createNewRouteApi';
import { StatusSelectField, TextFields } from '../models/FieldsForForm';
import { initialValues } from '../models/initialValues';

export const CreateNewRoutePage = () => {
    const { handleSubmit, reset, control } = useForm<NewRouteType>({
        defaultValues: initialValues,
    });

    const handleAddNewRoute: SubmitHandler<NewRouteType> = (data) => {
        createNewRoute(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleAddNewRoute)}>
            <Typography level="h1">Создание нового маршрута</Typography>
            <Stack gap={1} sx={{ mt: 2 }}>
                {TextFields(control)}
                {StatusSelectField(control)}
                <Button type="submit" variant="outlined">
                    Создать
                </Button>
            </Stack>
        </form>
    );
};
