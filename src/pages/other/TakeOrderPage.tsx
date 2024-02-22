import { Box, Button, Stack, Typography } from '@mui/joy';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from 'shared/api';

export const TakeOrderPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const orderId = params.orderId;
    const messageId = params.messageId;
    const chatId = params.chatId;

    const handleTake = async () => {
        await instance
            .patch(`/bot/take?chatId=${chatId}&messageId=${messageId}&orderId=${orderId}`)
            .then((res) => res.data);
        await instance.patch(`orders/isWorking?id=${orderId}&isWorking=isWorking`).then((res) => res.data);
        navigate(`/work/${chatId}/${messageId}/${orderId}`);
    };

    const handleCancel = async () => {
        await instance
            .patch(`/bot/rejectMaster?chatId=${chatId}&messageId=${messageId}&orderId=${orderId}`)
            .then((res) => res.data);
        await instance.patch(`orders/isWorking?id=${orderId}&isWorking=close`).then((res) => res.data);
        close();
    };

    return (
        <Box sx={{ height: '100vh' }}>
            <Stack sx={{ p: '16px 16px 0 16px', height: 'calc(100% - 16px)' }} justifyContent="space-between">
                <Box>
                    <Typography level="h3" textAlign="center">
                        Новая заявка
                    </Typography>
                </Box>
                <Stack sx={{ gap: 5, mb: 4 }}>
                    <Button onClick={handleTake} variant="outlined">
                        Принять
                    </Button>
                    <Button onClick={handleCancel} color="danger" variant="outlined">
                        Отказаться
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};
