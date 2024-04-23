import { Button, Grid, Input, LinearProgress, Stack, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserType } from 'shared/types';
import { RouteCard } from 'widgets/routeCard/ui/RouteCard';

import { $promRotesStoreGetStatus, fetchRoutesFx } from '../models/PromRoutesStore';
import { $usersGetStatus, fetchUsersFx } from '../models/usersStore';

type PromRoutesPageProps = {
    currentUser: UserType;
};

export const PromRoutesPage: React.FC<PromRoutesPageProps> = ({ currentUser }) => {
    const navigate = useNavigate();

    const { data, error, loading } = useStore($promRotesStoreGetStatus);
    const { data: proms, loading: promsLoading } = useStore($usersGetStatus);

    const goToCreateNewRoute = () => navigate('/createNewRoute');

    useEffect(() => {
        fetchRoutesFx();
        fetchUsersFx();
    }, []);

    const routesList = data.map((route, index) => (
        <Grid key={index}>
            <RouteCard route={route} proms={proms} />
        </Grid>
    ));

    return (
        <>
            <Typography level="h1">Маршруты</Typography>
            <Stack flexDirection="row" sx={{ mt: 2 }} gap={2}>
                <Input placeholder="Поиск" />
                <Button variant="outlined" onClick={goToCreateNewRoute} disabled={loading ? true : false}>
                    Создать новый маршрут
                </Button>
            </Stack>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                {!loading ? routesList : <LinearProgress thickness={1} />}
            </Grid>
        </>
    );
};
