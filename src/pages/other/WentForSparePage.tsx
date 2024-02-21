import { Button, Stack } from '@mui/joy';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from 'shared/api';

export const WentForSparePage = () => {
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

    return (
        <Stack sx={{ gap: 5, mt: 2 }}>
            <Button onClick={handleReturn}>Вернулся</Button>
        </Stack>
    );
};
