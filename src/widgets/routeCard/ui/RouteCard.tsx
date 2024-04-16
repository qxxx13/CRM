import { Button, Card, CardContent, Stack, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { OrderStatusEnum } from 'shared/types';
import { RouteType } from 'shared/types/PromTypes';
import { StatusChip } from 'widgets/statusChip';

export const RouteCard: React.FC<{ route: RouteType }> = ({ route }) => {
    const navigate = useNavigate();

    const goToEditRoute = () => navigate(`/editRoute/${route.Id}`);

    return (
        <Card variant="outlined" sx={{ width: 250, gap: 2, borderRadius: 5 }}>
            <CardContent>
                <Stack flexDirection="row" justifyContent="space-between">
                    <Typography level="body-lg">Маршрут №{route.Id}</Typography>
                    <StatusChip status={route.Status as unknown as OrderStatusEnum} />
                </Stack>
                <Typography level="body-md" color="neutral">
                    Промоутер: {route.userId}
                </Typography>

                <Button onClick={goToEditRoute}>Редактировать</Button>
            </CardContent>
        </Card>
    );
};
