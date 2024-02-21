import { Button, Stack } from '@mui/joy';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from 'shared/api';

export const TakeOrderPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const orderId = params.orderId;
    const messageId = params.messageId;
    const chatId = params.chatId;

    const handleTake = () => {
        instance.patch(`/bot/take?chatId=${chatId}&messageId=${messageId}&orderId=${orderId}`).then((res) => res.data);
        navigate(`/work/${chatId}/${messageId}/${orderId}`);
    };

    const handleCancel = () => {
        instance
            .patch(`/bot/rejectMaster?chatId=${chatId}&messageId=${messageId}&orderId=${orderId}`)
            .then((res) => res.data);
        close();
    };

    return (
        <Stack sx={{ gap: 5, mt: 2 }}>
            <Button onClick={handleTake}>Принять</Button>
            <Button onClick={handleCancel}>Отказаться</Button>
        </Stack>
    );
};
