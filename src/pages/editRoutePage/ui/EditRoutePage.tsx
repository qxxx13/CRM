import { Button, LinearProgress, Stack, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CoordinatesType } from 'shared/types/PromTypes';
import { EditCoordinates } from 'widgets/editCoordinates';

import {
    $editRouteStore,
    $editRouteStoreGetStatus,
    addNewCoordinatesToStore,
    fetchCoordinatesFx,
} from '../models/editRouteStore';

export const EditRoutePage = () => {
    const routeId = useParams().id;

    const { data, loading } = useStore($editRouteStoreGetStatus);

    const coordinatesAccordionList = data.map((coordinate, index) => (
        <EditCoordinates coordinate={coordinate} key={index} />
    ));

    const handleAddNewAccordion = () => {
        const newCoordinate: CoordinatesType = {
            Id: data.length + 1,
            Latitude: '',
            Longitude: '',
            RouteId: +String(routeId),
            MapUrl: '',
        };

        addNewCoordinatesToStore(newCoordinate);
    };

    useEffect(() => {
        fetchCoordinatesFx({ routeId: String(routeId) });
    }, []);

    return (
        <>
            <Typography level="h1">Редактирование маршрута №{routeId}</Typography>
            <Stack sx={{ mt: 2 }}>
                {!loading ? <Stack gap={1}>{coordinatesAccordionList}</Stack> : <LinearProgress thickness={1} />}
            </Stack>
            <Stack flexDirection="row" justifyContent="center">
                <Button variant="outlined" sx={{ width: '30%' }} onClick={handleAddNewAccordion}>
                    Создать
                </Button>
            </Stack>
        </>
    );
};
