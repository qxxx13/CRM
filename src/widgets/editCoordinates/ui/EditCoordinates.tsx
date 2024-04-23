import { Stack, Typography } from '@mui/joy';
import { AddNewCoordinateForm } from 'features/add-new-coordinates';
import React from 'react';
import { CoordinatesType } from 'shared/types/PromTypes';

export const EditCoordinates: React.FC<{ coordinate: CoordinatesType; index: number }> = ({ coordinate, index }) => {
    return (
        <Stack flexDirection="row" alignItems="center">
            <Typography level="body-lg" sx={{ width: '50px' }}>
                № {index}
            </Typography>
            <AddNewCoordinateForm coordinate={coordinate} />
        </Stack>
    );
};
