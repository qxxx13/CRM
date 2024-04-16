import { Stack } from '@mui/joy';
import { useForm } from 'react-hook-form';
import { NewCoordinateType } from 'shared/types/PromTypes';

export const AddNewCoordinateForm = () => {
    const { handleSubmit, reset, control } = useForm<NewCoordinateType>();
    return (
        <form>
            <Stack sx={{ gap: 1 }}></Stack>
        </form>
    );
};
