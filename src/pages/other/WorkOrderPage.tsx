import { Button, Stack } from '@mui/joy';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from 'shared/api';

export const WorkOrderPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const orderId = params.orderId;
    const messageId = params.messageId;
    const chatId = params.chatId;

    const handleAtWork = () => {
        instance
            .patch(`/bot/atWork?chatId=${chatId}&messageId=${messageId}&orderId=${orderId}`)
            .then((res) => res.data);
        instance.patch(`/orders/status?id=${orderId}&status=atWork`).then((res) => res.data);
        navigate('/work');
    };

    const handleWent = () => {
        alert('В процессе');
    };

    const handleClose = () => {
        navigate(`/`);
        navigate(`/closeorder/${chatId}/${messageId}/${orderId}`);
    };

    return (
        <Stack sx={{ gap: 5, mt: 2 }}>
            <Button onClick={handleAtWork}>В работе</Button>
            <Button onClick={handleWent}>Отъехал за ЗЧ</Button>
            <Button onClick={handleClose}>Закрыть заявку</Button>
        </Stack>
    );
};
