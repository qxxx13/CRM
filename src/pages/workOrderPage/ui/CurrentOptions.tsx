import { Button } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { OrderStatusEnum } from 'shared/types';

import { atWorkOrder, rejectOrder, returnToOrder, takeOrder, takeToSDOrder, wentOrder } from '../api/workOrderApi';
import { setUpdate } from '../models/updateOrderStore';

export const CurrentOptions = (status: OrderStatusEnum, chatId: string, messageId: string, orderId: string) => {
    const navigate = useNavigate();

    const handleTake = async () => {
        await takeOrder(chatId, messageId, orderId);
        await setUpdate();
    };

    const handleCancel = async () => {
        await rejectOrder(chatId, messageId, orderId);
        await setUpdate();
    };

    const handleAtWork = async () => {
        await atWorkOrder(chatId, messageId, orderId);
        await setUpdate();
    };

    const handleWent = async () => {
        await wentOrder(chatId, messageId, orderId);
        await setUpdate();
    };

    const handleSD = async () => {
        await takeToSDOrder(chatId, messageId, orderId);
        navigate(`/takeToSD`);
    };

    const handleClose = () => {
        navigate(`/closeorder/${chatId}/${messageId}/${orderId}`);
    };

    const handleReturn = async () => {
        await returnToOrder(chatId, messageId, orderId);
        await setUpdate();
    };

    switch (status) {
        case 'pending':
            return (
                <>
                    <Button onClick={handleTake} variant="outlined">
                        Принять
                    </Button>
                    <Button onClick={handleCancel} color="danger" variant="outlined">
                        Отказаться
                    </Button>
                </>
            );
        case 'atWork':
            return (
                <>
                    <Button onClick={handleWent} color="warning" variant="outlined">
                        Отъехал за ЗЧ
                    </Button>
                    <Button onClick={handleSD} color="warning" variant="outlined">
                        Забрал на СД
                    </Button>
                    <Button onClick={handleClose} color="success" variant="outlined">
                        Закрыть заявку
                    </Button>
                </>
            );
        case 'active':
            return (
                <>
                    <Button onClick={handleAtWork} variant="outlined">
                        В работе
                    </Button>
                    <Button onClick={handleWent} color="warning" variant="outlined">
                        Отъехал за ЗЧ
                    </Button>
                    <Button onClick={handleSD} color="warning" variant="outlined">
                        Забрал на СД
                    </Button>
                    <Button onClick={handleClose} color="success" variant="outlined">
                        Закрыть заявку
                    </Button>
                </>
            );
        case 'masterWentForSparePart':
            return (
                <Button onClick={handleReturn} variant="outlined">
                    Вернулся
                </Button>
            );
        case 'takeToSD':
            return (
                <Button onClick={handleReturn} variant="outlined">
                    Вернулся
                </Button>
            );
        case 'debt':
            return (
                <Button onClick={handleClose} variant="outlined">
                    Закрыть
                </Button>
            );
    }
};
