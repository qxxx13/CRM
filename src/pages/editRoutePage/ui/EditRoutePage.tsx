import { Button, LinearProgress, Option, Select, Stack, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { UserType } from 'shared/types';
import { CoordinatesType } from 'shared/types/PromTypes';
import { EditCoordinates } from 'widgets/editCoordinates';

import { addNewCoordinate, sendToProm } from '../api/editRouteApi';
import { $editRouteStoreGetStatus, addNewCoordinatesToStore, fetchCoordinatesFx } from '../models/editRouteStore';

export const EditRoutePage = () => {
    const routeId = useParams().id;
    const location = useLocation();

    const proms = location.state.proms as UserType[];
    const currentProm = location.state.currentProm as UserType;

    const [promId, setPromId] = useState(currentProm.Id || 1);

    const { data, loading } = useStore($editRouteStoreGetStatus);

    const coordinatesAccordionList = data.map((coordinate, index) => (
        <EditCoordinates coordinate={coordinate} key={index} index={index} />
    ));

    const options = proms.map((prom) => (
        <Option value={prom.Id} key={prom.Id}>
            {prom.UserName}
        </Option>
    ));

    const lastId = data.length !== 0 ? data.at(-1)?.Id : 0;

    const handleAddNewAccordion = () => {
        const newCoordinate: CoordinatesType = {
            Id: lastId || 0 + 1,
            Latitude: '',
            Longitude: '',
            RouteId: +String(routeId),
            MapUrl: '',
        };

        addNewCoordinatesToStore(newCoordinate);

        const coordinateToServer = structuredClone(newCoordinate);

        Reflect.deleteProperty(coordinateToServer, 'Id');

        addNewCoordinate(coordinateToServer);
    };

    const handleSendToProm = () => {
        sendToProm(promId, +String(routeId));
    };

    useEffect(() => {
        fetchCoordinatesFx({ routeId: String(routeId) });
    }, []);

    return (
        <>
            <Typography level="h1">Редактирование маршрута №{routeId}</Typography>
            <Select defaultValue={promId} onChange={(e, value) => setPromId(Number(value))}>
                {options}
            </Select>
            <Button onClick={handleSendToProm}>Выслать промоутеру</Button>
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
