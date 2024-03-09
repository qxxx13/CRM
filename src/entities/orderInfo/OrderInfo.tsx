import { Button, Stack, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from 'shared/api';
import { OrderType, UserType } from 'shared/types';
import { StatusChip } from 'widgets/statusChip';

export const OrderInfo: React.FC<{ order: OrderType; user: UserType }> = ({ order, user }) => {
    const navigate = useNavigate();

    const {
        ActiveOrderMessageId,
        AllOrdersMessageId,
        BotMessage,
        Latitude,
        Longitude,
        TelephoneRecord,
        Status,
        Date,
        Id,
        ClosingOrderId,
        MessageId,
        IsWorking,
        MasterId,
        ...textFields
    } = order;

    const infoFields = Object.entries(textFields).map((entry, index) => {
        const [key, value] = entry;

        return (
            <Typography level="body-lg" key={index}>
                {translate(key)}: {translate(String(value))}
            </Typography>
        );
    });

    const handleEdit = () => {
        navigate(`/editOrder/${order.Id}`);
    };

    const handleClientCancel = async () => {
        try {
            await instance.patch(
                `/bot/rejectClient?chatId=${user.TelegramChatId}&messageId=${order.MessageId}&orderId=${order.Id}`,
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async () => {
        try {
            await instance
                .patch(`/bot/delete?chatId=${user.TelegramChatId}&messageId=${order.MessageId}&orderId=${order.Id}`)
                .then((res) => res.data);
        } catch (error) {
            console.log(error);
        }

        navigate(`/orders`);
    };

    const handleClose = () => {
        navigate(`/closeorder/${user.TelegramChatId}/${order.MessageId}/${order.Id}`);
    };

    return (
        <Stack sx={{ gap: 1 }}>
            <Typography level="h3">Заявка №{order.Id}</Typography>
            <Typography level="body-lg">
                Статус: <StatusChip status={order.Status} />
            </Typography>
            <Typography level="body-lg">Дата: {moment(order.Date).format('DD.MM.YY')}</Typography>
            <Typography level="body-lg">Мастер: {user.UserName}</Typography>
            {infoFields}

            <Stack sx={{ gap: 2, mt: 2 }}>
                <Button variant="outlined" onClick={handleEdit}>
                    Редактировать
                </Button>
                <Button variant="outlined" color="warning" onClick={handleClientCancel}>
                    Отмена
                </Button>
                <Button variant="outlined" color="success" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="outlined" color="danger" onClick={handleDelete}>
                    Удалить
                </Button>
            </Stack>
        </Stack>
    );
};
