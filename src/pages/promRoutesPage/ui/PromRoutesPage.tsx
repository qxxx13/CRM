import { Button, Grid, Input, LinearProgress, Stack, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserType } from 'shared/types';
import { RouteCard } from 'widgets/routeCard/ui/RouteCard';

import { $promRotesStoreGetStatus, fetchRoutesFx } from '../models/PromRoutesStore';

type PromRoutesPageProps = {
    currentUser: UserType;
};

export const PromRoutesPage: React.FC<PromRoutesPageProps> = ({ currentUser }) => {
    const navigate = useNavigate();

    const { data, error, loading } = useStore($promRotesStoreGetStatus);

    const goToCreateNewRoute = () => navigate('/createNewRoute');

    useEffect(() => {
        fetchRoutesFx();
    }, []);

    const routesList = data.map((route, index) => <RouteCard route={route} key={index} />);

    return (
        <>
            <Typography level="h1">Маршруты</Typography>
            <Stack flexDirection="row" sx={{ mt: 2 }} gap={2}>
                <Input placeholder="Поиск" />
                <Button variant="outlined" onClick={goToCreateNewRoute} disabled={loading ? true : false}>
                    Создать новый маршрут
                </Button>
            </Stack>

            <Grid sx={{ mt: 2 }}>{!loading ? routesList : <LinearProgress thickness={1} />}</Grid>
        </>
    );
};
