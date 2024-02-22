import { Box, Button, LinearProgress, Stack, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from 'shared/api';

import { $orderGetStatus, fetchOrderFx } from './models/odersStore';

export const WentForSparePage = () => {
    const { data, error, loading } = useStore($orderGetStatus);

    const params = useParams();
    const navigate = useNavigate();

    const orderId = params.orderId;
    const messageId = params.messageId;
    const chatId = params.chatId;

    const handleReturn = () => {
        instance
            .patch(`/bot/atWork?chatId=${chatId}&messageId=${messageId}&orderId=${orderId}`)
            .then((res) => res.data);
        navigate(`/work/${chatId}/${messageId}/${orderId}`);
    };

    useEffect(() => {
        fetchOrderFx({ orderId: String(orderId) });

        console.log('effect');
    }, []);
    return (
        <>
            {!loading && !error ? (
                <Box sx={{ height: '100vh' }}>
                    <Stack sx={{ p: '16px 16px 0 16px', height: 'calc(100% - 16px)' }} justifyContent="space-between">
                        <Stack sx={{ gap: 1 }}>
                            <Typography level="h3">Заявка №{data.Id}</Typography>
                            <Typography level="body-lg">Статус: {translate(data.Status)}</Typography>
                            <Typography level="body-lg">Город: {data.City}</Typography>
                            <Typography level="body-lg">Адрес: {data.Address}</Typography>
                            <Typography level="body-lg">Номер КЛ: {data.ClientPhoneNumber}</Typography>
                            <Typography level="body-lg">Имя мастера: {data.MasterName}</Typography>
                            <Typography level="body-lg">Озвучка: {data.AnnouncedPrice}</Typography>
                        </Stack>
                        <Stack sx={{ gap: 2, mb: 2 }}>
                            <Button onClick={handleReturn} variant="outlined">
                                Вернулся
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            ) : (
                <LinearProgress thickness={1} />
            )}
        </>
    );
};
