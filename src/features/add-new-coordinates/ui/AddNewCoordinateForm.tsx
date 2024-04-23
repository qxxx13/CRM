import { Button, Input, Stack } from '@mui/joy';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CoordinatesType } from 'shared/types/PromTypes';

import { editNewCoordinate } from '../api/addNewCoordinateApi';

export const AddNewCoordinateForm: React.FC<{ coordinate: CoordinatesType }> = ({ coordinate }) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<{ CoordinateUrl: string; Comments: string; Id: number }>();

    const handleAddNewCoordinate: SubmitHandler<{ CoordinateUrl: string; Comments: string }> = (data) => {
        const newCoordinate = Object.assign(data, { Id: coordinate.Id });

        editNewCoordinate(newCoordinate);
    };

    return (
        <form onSubmit={handleSubmit((data) => handleAddNewCoordinate(data))}>
            <Stack sx={{ gap: 1, p: 1 }} flexDirection="row">
                <Input
                    placeholder="47.999, 52.778"
                    {...register('CoordinateUrl', { required: true })}
                    color={errors.CoordinateUrl ? 'danger' : 'neutral'}
                    defaultValue={coordinate.CoordinateUrl}
                />
                <Input placeholder="Комментарий" defaultValue={coordinate.Comments} {...register('Comments')} />

                <Button variant="outlined" type="submit">
                    Сохранить точку
                </Button>
                <Button variant="outlined" color="danger">
                    Удалить точку
                </Button>
            </Stack>
        </form>
    );
};
