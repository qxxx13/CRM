import { Box, Button, LinearProgress, Stack, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from 'shared/api';

import { $orderGetStatus, fetchOrderFx } from './models/odersStore';

export const WorkOrderPage = () => {
    const { data, error, loading } = useStore($orderGetStatus);

    const params = useParams();
    const navigate = useNavigate();

    const orderId = params.orderId;
    const messageId = params.messageId;
    const chatId = params.chatId;

    const handleAtWork = async () => {
        await instance
            .patch(`/bot/atWork?chatId=${chatId}&messageId=${messageId}&orderId=${orderId}`)
            .then((res) => res.data);

        fetchOrderFx({ orderId: String(orderId) });
    };

    const handleWent = async () => {
        await instance.patch(`/bot/went?chatId=${chatId}&messageId=${messageId}&orderId=${orderId}`);

        navigate(`/went/${chatId}/${messageId}/${orderId}`);
    };

    const handleClose = () => {
        navigate(`/`);
        navigate(`/closeorder/${chatId}/${messageId}/${orderId}`);
    };

    useEffect(() => {
        fetchOrderFx({ orderId: String(orderId) });
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
                            <Button onClick={handleAtWork} variant="outlined">
                                В работе
                            </Button>
                            <Button onClick={handleWent} color="warning" variant="outlined">
                                Отъехал за ЗЧ
                            </Button>
                            <Button onClick={handleWent} color="warning" variant="outlined">
                                СД
                            </Button>
                            <Button onClick={handleClose} color="success" variant="outlined">
                                Закрыть заявку
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
